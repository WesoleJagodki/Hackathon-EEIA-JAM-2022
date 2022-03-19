from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from marshmallow import post_load
from datetime import date
import attr
from rest_framework import status
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from marshmallow import EXCLUDE, Schema
from rest_marshmallow import fields
from fancycity.models import UserModel
from uuid import uuid4, UUID
from django.db.utils import IntegrityError

class UserRegisterSerializer(Schema):
    email = fields.Str(required=True)
    firstname = fields.Str(required=True)
    lastname = fields.Str(required=True)
    birthdate = fields.Date(required=True)
    password = fields.Str(required=True)

    @post_load
    def create_entity(self, data, **kwargs):
        return User(id=uuid4(), **data)


@attr.s(auto_attribs=True)
class User:
    id: UUID
    email: str
    firstname: str
    lastname: str
    birthdate: date
    password: str


class UserApiView(APIView):
    def post(self, request):
        try:
            user = UserRegisterSerializer().load(data=request.data)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data=str(e))

        try:
            UserModel.objects.create_user(
                **attr.asdict(user), username=user.email
            )
        except IntegrityError:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"errors": ["email already exists"]})


        return Response()
