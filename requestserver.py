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