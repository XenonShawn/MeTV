import json

from models import Series


class Show:
    name = "Channel 5 Drama"
    image = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Mediacorp_Channel_5.jpg/220px-Mediacorp_Channel_5.jpg"

    @staticmethod
    async def get_series():
        # Temporary
        with open("series.json", encoding="utf8") as f:
            return [Series(**s) for s in json.load(f)]

