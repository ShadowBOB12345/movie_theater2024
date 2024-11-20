from django.contrib import admin
from .models import Movie, Genre, Theater, Screening, Booking, TicketType, Seat

# Register your models here.
admin.site.register(Movie)
admin.site.register(Genre)
admin.site.register(Theater)
admin.site.register(Screening)
admin.site.register(Booking)
admin.site.register(TicketType)
admin.site.register(Seat)