from rest_framework.serializers import ModelSerializer
from .models import Movie, Screening, Booking, Seat, TicketType

class MovieSerializer(ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'
        
class ScreenSerializer(ModelSerializer):
    class Meta:
        model = Screening
        fields = '__all__'
        
        
class BookingSerializer(ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        
class SeatSerializer(ModelSerializer):
    class Meta:
        model = Seat
        fields = '__all__'
        
class TicketSerializer(ModelSerializer):
    class Meta:
        model = TicketType
        fields = '__all__'