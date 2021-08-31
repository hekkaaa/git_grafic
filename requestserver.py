import requests


class Git_Request:
    def __init__(self, git_url=None):
        self.git_url = git_url

    def func_request(self):
        return_list = []  # list для return
        page = 1  # Счетчик страниц
        error_value = False
        error_type = None

        while True:
            res = requests.get('https://api.github.com/repos/' + self.git_url + f'/commits?page={page}').json()
            # Проверяем типа переменнойю Ошибки api летят в dict. Нормальный ответ в list.
            if isinstance(res, dict) == True:
                # Ошибка ссылки
                if res['documentation_url'] == 'https://docs.github.com/rest/reference/repos#list-commits' or res['documentation_url'] == "https://docs.github.com/rest/reference/repos#get-a-repository":
                    error_value = True
                    error_type = "Ошибка на ссылку репозитория"
                    return_list = res
                    break
                # Блокировка IP
                elif res['documentation_url'] == 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting':
                    error_value = True
                    error_type = "Блокировка IP. Превышен лимит запросов."
                    return_list = res
                    break
                # Иные ошибки
                else:
                    error_value = True
                    error_type = "Непредвиденая ошибка запроса"
                    return_list = res
                    break
            else:
                for i in range(len(res)):
                    try:
                        exit1 = res[i]['commit']['author']
                        exit2 = res[i]['commit']['verification']
                        return_list.append([exit1, exit2])

                    except KeyError:
                        error_value = True
                        error_type = "Ошибка при указании адреса"
                        break

                    except:
                        error_value = True
                        error_type = "Неизвестная ошибка"
                        break

                # Если количестко элементов на странице меньше 30 значит далее страниц нет.
                # Предел 30 жлементов на 1 странице.
                if len(res) < 30:
                    break

                page += 1
        return error_value, error_type, return_list

# ошибки который нужно будет потов ключить в обработку.
# {'message': 'Not Found', 'documentation_url': 'https://docs.github.com/rest/reference/repos#list-commits'}
# {'message': "API rate limit exceeded for 2.60.66.36. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)", 'documentation_url': 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting'}
