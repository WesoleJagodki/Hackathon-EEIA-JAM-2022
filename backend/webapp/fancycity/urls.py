from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

from fancycity.views import UserApiView





from django.urls import path

urlpatterns = [
    path('hello/', HelloView.as_view(), name='hello'),
    path('user/', UserApiView.as_view())
]



