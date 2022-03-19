import attr
from django.db.utils import IntegrityError
from fancycity.models import UserModel
from fancycity.serializers import UserRegisterSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class UserApiView(APIView):
    def post(self, request):
        try:
            user = UserRegisterSerializer().load(data=request.data)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST, data=str(e))

        try:
            UserModel.objects.create_user(**attr.asdict(user), username=user.email)
        except IntegrityError:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"errors": ["email already exists"]},
            )

        return Response()
