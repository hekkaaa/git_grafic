from fastapi import FastAPI
from requestserver import *


app = FastAPI()

@app.get("/")
async def root():
    return {Test_func_request()}

#запуск сервака в ручную
 # uvicorn main:app --reload
