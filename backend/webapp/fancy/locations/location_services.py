import attr
import requests
from fancy.locations.location import Location
from shared.enum import StrEnum


class LocationType(StrEnum):
    RESTAURANT = "restaurant"
    GYM = "gym"
    BAR = "bar"
    SHOPPING_MALL = "shopping_mall"


@attr.s(auto_attribs=True)
class LocationService:
    location: str

    def get_nearby_locations(self, location_type: LocationType, radius=500):
        response = requests.get(
            f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={self.location}&radius={radius}&types={location_type}&key=AIzaSyDw5p7xB91pcHhlwFWodXYkU-5anR-MQr4"
        )

        if not response.ok:
            return []

        locations = []
        data = response.json()
        for result in data["results"]:
            locations.append(Location.from_dict(result))

        return locations
