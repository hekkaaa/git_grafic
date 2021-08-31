from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from requestserver import *


class Item(BaseModel):
    # Класс для обработки запроса со стороны клиента
    name: str = None


class ItemOUT(BaseModel):
    # Класс для ответа клиенту
    error_value: bool = None
    error_type: str = None
    answer_post: str = None


app = FastAPI()

# Устранение ошибки CORS
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


###########

@app.get("/")
async def root():
    print('GET HERE')
    return {"message:", "SERVER 200 MEOW (^･ｪ･^)"}
    # return {Git_Request(url).func_request()}


@app.post("/post")
async def getroot(item: Item):
    # Работа с экземпляром класса
    request_post = ItemOUT()
    res = Git_Request(item.name).func_request()
    request_post.error_value = res[0]
    request_post.error_type = res[1]
    request_post.answer_post = res[2]
    return request_post

# запуск сервака в ручную
# uvicorn main:app --reload
