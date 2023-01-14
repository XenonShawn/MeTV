import json

from models import Series, Episode, Categories


class Show:
    name = "Channel 8 Drama"
    image = "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Mediacorp_Channel_8.jpg/220px-Mediacorp_Channel_8.jpg"

    @staticmethod
    async def get_series() -> list[Series]:
        # Temporary
        with open("series.json", encoding="utf8") as f:
            result = [Series(**s) for s in json.load(f)]
        return result

    @staticmethod
    async def get_episodes(series_id: str) -> Series:
        temp = await Show.get_series()
        for series in temp:
            if series.id == series_id:
                return series
        return []
