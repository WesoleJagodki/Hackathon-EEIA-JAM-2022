import attr


@attr.s(auto_attribs=True)
class Location:
    name: str
    location: str
    img_url: str
    open_hours: str
    rating: str
