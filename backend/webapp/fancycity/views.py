import attr
from django.db.utils import IntegrityError
from fancy.locations.location_services import LocationService, LocationType
from fancycity.models import UserModel
from fancycity.serializers import UserRegisterSerializer, UserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class UserApiView(APIView):
    def get(self, request):
        data = UserSerializer().dump(request.user)
        return Response(data=data)

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


class LocationApiView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        location_svc = LocationService("51.7526928,19.4534678")
        return Response(location_svc.get_nearby_locations(LocationType.BAR))
