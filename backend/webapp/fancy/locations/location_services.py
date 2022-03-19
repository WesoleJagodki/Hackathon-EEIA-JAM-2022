import attr
from shared.enum import StrEnum


class LocationType(StrEnum):
    RESTAURANT = "restaurant"
    CINEMA = "cinema"
    BAR = "bar"
    SHOP = "shop"


@attr.s(auto_attribs=True)
class LocationService:
    location: str

    def get_nearby_locations(self, location_type, radius=500):
        response = requests.get(
            "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&key=AIzaSyDw5p7xB91pcHhlwFWodXYkU-5anR-MQr4"
        )


srv = LocationService(None)
srv.get_nearby_locations(None, None)
