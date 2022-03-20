from uuid import uuid4

from marshmallow import Schema, post_dump, post_load
from rest_marshmallow import fields
from shared.entities import User


class UserRegisterSerializer(Schema):
    email = fields.Str(required=True)
    firstname = fields.Str(missing="")
    lastname = fields.Str(missing="")
    username = fields.Str(missing="")
    username2 = fields.Str(missing="")
    gender = fields.Str(required=True)
    pin = fields.Str(required=True)
    birthdate = fields.Str(required=True)
    password = fields.Str(required=True)
    address = fields.Str(missing="")

    @post_load
    def create_entity(self, data, **kwargs):
        data["username2"] = data["username"]
        return User(id=uuid4(), **data)


class UserSerializer(Schema):
    email = fields.Str()
    firstname = fields.Str()
    lastname = fields.Str()
    username = fields.Str()
    username2 = fields.Str()
    gender = fields.Str()
    pin = fields.Str()
    birthdate = fields.Str()
    address = fields.Str()

    @post_dump
    def remove_username(self, data, **kwargs):
        data["username"] = data.pop("username2")
        return data
