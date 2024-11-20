from django.db import IntegrityError
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from ..models import User

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/auth/token',
        'auth/token/refresh',
    ]
    return Response(routes)

@api_view(['POST'])
def register(request):
    userInfo = request.data
    username = userInfo['username']
    password = userInfo['password']
    confirmation = userInfo['confirmation']
    if password != confirmation:
        return Response('Password must match', status=status.HTTP_404_NOT_FOUND)
    email = userInfo['email']
    try:
        user = User.objects.create_user(username, email, password)
        user.save()
    except IntegrityError:
        return Response('Username already taken', status=status.HTTP_404_NOT_FOUND)
    
    return Response('User created successfully')