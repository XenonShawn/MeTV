import json

from models import Series, Episode


class Show:
    name = "Channel 8 Drama"
    image = "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Mediacorp_Channel_8.jpg/220px-Mediacorp_Channel_8.jpg"

    cache = {}

    @staticmethod
    async def get_series() -> list[Series]:
        # Temporary
        with open("series.json", encoding="utf8") as f:
            result = [Series(**s) for s in json.load(f)]
        Show.cache = {s.id: s for s in result}
        return result

    @staticmethod
    async def get_episodes(series_id: str) -> list[Episode]:
        if series_id not in Show.cache:
            await Show.get_series()

        if series_id not in Show.cache:
            return []

        # Temporary
        with open("episodes.json", encoding="utf8") as f:
            return [Episode(**e) for e in json.load(f)]
