from pydantic import BaseModel

class Categories(BaseModel):
    id: str
    name: str
    image: str

class Series(BaseModel):
    id: str
    name: str
    image: str
    description: str

class Episode(BaseModel):
    num: int
    name: str
    image: str
    link: str
    description: str