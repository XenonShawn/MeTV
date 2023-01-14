from pydantic import BaseModel

class Categories(BaseModel):
    id: str
    name: str
    image: str

class Episode(BaseModel):
    id: int
    name: str
    image: str
    link: str
    description: str

class Series(BaseModel):
    id: str
    name: str
    image: str
    description: str
    episodes: list[Episode]
    total_episodes: int
