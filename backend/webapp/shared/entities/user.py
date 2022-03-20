from uuid import UUID

import attr


@attr.s(auto_attribs=True)
class User:
    id: UUID
    email: str
    address: str
    username: str
    username2: str
    gender: str
    firstname: str
    lastname: str
    birthdate: str
    password: str
    pin: str
