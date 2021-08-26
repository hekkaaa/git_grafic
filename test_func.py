import requests

def test_func_request(git_url):
    return_list = []  # list для return
    page = 1  # Счетчик страниц
    error_value = False
    error_type = None

    while True:
        res = requests.get('https://api.github.com/repos/' + git_url + f'/commits?page={page}').json()
        print(res)
        for i in range(len(res)):

                exit1 = res[i]['commit']['author']
                exit2 = res[i]['commit']['verification']
                return_list.append([exit1, exit2])



        # Если количестко элементов на странице меньше 30 значит далее страниц нет.
        # Предел 30 жлементов на 1 странице.
        if len(res) < 30:
            break

        page += 1
    return error_value, error_type, return_list

while True:

    res = requests.get('https://api.github.com/repos/' + "hekkaaa/git_grafic1" + f'/commits?page=1').json()

    print(res)


#{'message': 'Not Found', 'documentation_url': 'https://docs.github.com/rest/reference/repos#list-commits'}
{'message': "API rate limit exceeded for 2.60.66.36. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)", 'documentation_url': 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting'}