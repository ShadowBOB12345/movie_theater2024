from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('movies/', views.getMovies, name='movies'),
    path('movies/<int:id>', views.getMovie, name='movie'),
    path('movies/<int:id>/screen/', views.getScreensTime, name='screen'),
    path('movies/<int:id>/screen/<int:screenId>/', views.getScreenInfo),
    path('movies/<int:id>/screen/<int:screenId>/book', views.bookTicket, name='book'),
    path('movies/<int:id>/screen/<int:screenId>/getSeatsInfo', views.getSeatsInfo, name='seatInfo'),
    path('movies/<int:id>/screen/<int:screenId>/getTicketInfo', views.getTicketInfo, name='getTicket'),
    path('movies/<int:id>/screen/<int:screenId>/booking/<int:bookingId>', views.getBookingInfo),
    path('movies/<int:id>/screen/<int:screenId>/booking/<int:bookingId>/getSeatInfo', views.getSeatInfo),
    path('ticket/<int:ticketId>', views.getTicket),
    path('user/booking', views.getBookingByUser)
]
