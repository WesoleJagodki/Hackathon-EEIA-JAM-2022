import attr


@attr.s(auto_attribs=True)
class Location:
    name: str
    location: str
    img_url: str
    opening_hours: str
    rating: str

    @classmethod
    def from_dict(cls, data: dict):
        loc = data["geometry"]["location"]
        loc = f"{loc['lat']},{loc['lng']}"
        data["location"] = loc
        data["img_url"] = ""
        data["opening_hours"] = ""
        data["rating"] = ""

        return cls(**{a.name: data[a.name] for a in cls.__attrs_attrs__})
