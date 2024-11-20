from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Genre(models.Model):
    name = models.CharField(max_length=256)

    def __str__(self):
        return f"{self.name}"


class Movie(models.Model):
    title = models.CharField(max_length=155)
    description = models.TextField()
    image = models.CharField(max_length=500)
    trailer = models.CharField(max_length=200)
    genres = models.ManyToManyField(
        Genre, blank=True, related_name="movieGenres")
    duration = models.DurationField(null=True, blank=True)

    def __str__(self):
        return self.title


class Theater(models.Model):
    name = models.CharField(max_length=10, default="Theater")
    seat = models.IntegerField()

    def __str__(self):
        return f"{self.name}"
    
class Seat(models.Model):
    seatCode = models.CharField(max_length=15)
    taken = models.BooleanField(default=False)

    def __str__(self):
        if (self.taken):
            return f"{self.seatCode}"
        else:
            return "No seat"
    
class TicketType(models.Model):
    ticket_type = models.CharField(max_length=20)
    price = models.FloatField(default=1)
    
    def __str__(self):
        return f"{self.ticket_type}: ${self.price}"

class Screening(models.Model):
    theater = models.ForeignKey(Theater, on_delete=models.CASCADE)
    movie = models.ForeignKey(
        Movie, on_delete=models.CASCADE, related_name='movieTime')
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    seat = models.ManyToManyField(Seat, blank=True, related_name="screen_seat")
    ticket_type = models.ManyToManyField(TicketType, blank=True)

    def __str__(self):
        return f"{self.movie.title}: {self.time} at {self.theater}"


class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    screening = models.ForeignKey(Screening, on_delete=models.CASCADE)
    ticket_type = models.ForeignKey(TicketType, on_delete=models.CASCADE, null=True)
    seat = models.ForeignKey(Seat, on_delete=models.CASCADE, null=True)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=True)
    movie_title = models.CharField(max_length=155, blank=True)
    screen_date = models.DateField(null=True)
    screen_time = models.TimeField(null=True)
    seatCode = models.CharField(max_length=15, blank=True)
    ticket_type_name = models.CharField(max_length=20, null=True)
    ticket_price = models.FloatField(default=1, null=True)

    def __str__(self):
        return f"{self.user} booked {self.ticket_type} {self.screening}"
    
