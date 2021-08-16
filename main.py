from fastapi import FastAPI
from requestserver import *


app = FastAPI()

@app.get("/")
async def root():
    return {Git_Request(url).func_request()}

#запуск сервака в ручную
 # uvicorn main:app --reload
