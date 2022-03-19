import attr
import requests
from fancy.locations.location import Location
from rich import print
from shared.enum import StrEnum


class LocationType(StrEnum):
    RESTAURANT = "restaurant"
    CINEMA = "cinema"
    BAR = "bar"
    SHOP = "shop"


@attr.s(auto_attribs=True)
class LocationService:
    location: str

    def get_nearby_locations(self, location_type: LocationType, radius=500):
        types = ",".join(location_type)

        response = requests.get(

        )

        if not response.ok:
            return []

        locations = []
        data = response.json()
        for result in data["results"]:
            locations.append(Location.from_dict(result))

        return locations


srv = LocationService("51.7526928,19.4534678")
locations = srv.get_nearby_locations("Museum")
print(locations)
