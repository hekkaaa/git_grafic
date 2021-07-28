import requests
from pprint import *

r = requests.get('https://api.github.com/repos/hekkaaa/automatic_trading_system/commits?page=1').json()
pprint(r)