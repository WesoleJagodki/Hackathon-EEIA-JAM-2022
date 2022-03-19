from uuid import uuid4

from marshmallow import Schema, post_load
from rest_marshmallow import fields
from shared.entities import User


class UserRegisterSerializer(Schema):
    email = fields.Str(required=True)
    firstname = fields.Str(required=True)
    lastname = fields.Str(required=True)
    birthdate = fields.Date(required=True)
    password = fields.Str(required=True)

    @post_load
    def create_entity(self, data, **kwargs):
        return User(id=uuid4(), **data)
