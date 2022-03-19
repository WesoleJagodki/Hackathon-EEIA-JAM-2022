from django.urls import path
from fancycity.views import UserApiView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {"message": "Hello, World!"}
        return Response(content)


urlpatterns = [
    path("hello/", HelloView.as_view(), name="hello"),
    path("user/", UserApiView.as_view()),
]
