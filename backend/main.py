import importlib
import json
import os

from fastapi import FastAPI, HTTPException

from models import *

app = FastAPI()

@app.get("/categories")
def get_categories() -> list[Categories]:
    # Programically import all categories
    categories = []
    for f in os.listdir("categories"):
        if not f.endswith(".py") or f == "__init__.py":
            continue

        f = f.removesuffix(".py")
        try:
            category = importlib.import_module(f"categories.{f}").Show
            categories.append(Categories(id=f, name=category.name, image=category.image))
        except ImportError as e:
            print("fail", e)
            continue
    return categories

@app.get("/{category_id}")
async def get_series(category_id: str) -> list[Series]:
    try:
        category = importlib.import_module(f"categories.{category_id}")
    except ImportError:
        raise HTTPException(status_code=401, detail="That category does not exist.")

    return await category.Show.get_series()

@app.get("/{category_id}/{series_id}")
async def get_episodes(category_id: str, series_id: str) -> list[Episode]:
    try:
        category = importlib.import_module(f"categories.{category_id}")
    except ImportError:
        raise HTTPException(status_code=401, detail="That category does not exist.")

    return await category.Show.get_episodes(series_id)
