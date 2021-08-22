from fastapi import FastAPI, requests
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from requestserver import *

class Item(BaseModel):
    # Тут вскоре сменится имя переменных. Пока что Test.
    name: str = None
    surname: str = None


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    print('GET HERE')
    return {"message:", "SERVER 200 MEOW (^･ｪ･^)"}
    # return {Git_Request(url).func_request()}

@app.post("/post")
async def getroot(item: Item):
    print('POST HERE')
    print(item)
    return {"message:", "MEOW POST"}

#запуск сервака в ручную
 # uvicorn main:app --reload
