
from urllib import response
import requests

URL = "https://public.bitbank.cc/tickers_jpy"

response = requests.get(URL)
print(response.json())


