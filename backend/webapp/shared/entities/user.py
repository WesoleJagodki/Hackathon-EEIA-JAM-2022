from datetime import date
from uuid import UUID

import attr


@attr.s(auto_attribs=True)
class User:
    id: UUID
    email: str
    firstname: str
    lastname: str
    birthdate: date
    password: str
