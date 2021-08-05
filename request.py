import requests
from pprint import *

def Test_func_request():
    r = requests.get('https://api.github.com/repos/hekkaaa/automatic_trading_system/commits?page=1').json()

    #
    i = len(r)
    if(len(r) >= 30):
        r = requests.get('https://api.github.com/repos/hekkaaa/automatic_trading_system/commits?page=2').json()
        i = i + len(r)
    else:
        pass
        return False
    return i
# pprint(r)

print(Test_func_request())

