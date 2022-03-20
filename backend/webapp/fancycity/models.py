from django.contrib.auth.models import AbstractUser
from django.db import models


class UserModel(AbstractUser):
    id = models.UUIDField(primary_key=True, editable=False)
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    firstname = models.TextField(verbose_name="firstname", max_length=64, default="")
    lastname = models.TextField(verbose_name="lastname", max_length=64, default="")
    birthdate = models.TextField(verbose_name="birth date", max_length=64, default="")
    address = models.TextField(verbose_name="address", max_length=128, default="")
    pin = models.TextField(max_length=128, default="")
    gender = models.TextField(max_length=128, default="")
    username2 = models.TextField(max_length=128, default="")
