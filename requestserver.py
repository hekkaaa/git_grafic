import requests
from pprint import *

class Git_Request:
    def __init__(self, git_url=None):
        self.git_url = git_url


    def func_request(self, jjk=None):
        jjk = []
        res = requests.get(self.git_url).json()
        for i in range(len(res)):
            exit1 = res[i]['commit']['author']
            exit2 = res[i]['commit']['verification']
            jjk.append([exit1, exit2])
        return jjk


# result = Git_Request(url).func_request()
# jjk = []
# for i in range(len(result)):
#     print('--'*80)
#     exit1 = result[i]['commit']['author']
#     exit2 = result[i]['commit']['verification']
#     jjk.append([exit1,exit2])
#
# print('*'*90)
# pprint(jjk[0])



# def Test_func_request():
#     r = requests.get('https://api.github.com/repos/hekkaaa/automatic_trading_system/commits?page=1').json()
#
#     #
#     i = len(r)
#     if(len(r) >= 30):
#         r = requests.get('https://api.github.com/repos/hekkaaa/automatic_trading_system/commits?page=2').json()
#         i = i + len(r)
#     else:
#         return False
#     return i
# pprint(r)

#
# def test_req():
#    s = requests.get('https://api.github.com/repos/hekkaaa/git_grafic/commits?page=1').json()
#    print(s[1])
#    for i in s:
#        print(i[0])
#
#    return s



# hh = test_req()
# pprint(len(hh))
#
# print(type(hh))
# print(hh[0]['commit'])
# print(hh[1])
# print(hh[2])
# print(hh[3])
# print(hh[4])
# print(hh[5])
# print(hh[6])
# print(hh[7])
# print(hh[8])
# print(hh[9])
# print(hh[10])




# print(Test_func_request())

