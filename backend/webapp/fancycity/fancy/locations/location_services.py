from shared.enum import StrEnum
import attr
import requests


class LocationType(StrEnum):
    RESTAURANT = 'restaurant'
    CINEMA = 'cinema'
    BAR = 'bar'
    SHOP = 'shop'

@attr.s(auto_attribs=True)
class LocationService:
    location: str

srv = LocationService(None)
srv.get_nearby_locations(None, None)