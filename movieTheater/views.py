from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer, ScreenSerializer, BookingSerializer, SeatSerializer, TicketSerializer
from .models import Movie, Screening, Booking, Seat, TicketType, User

# Create your views here.


@api_view(['GET'])
def index(request):

    routes = [
        {
            'Endpoint': '/movies/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of movies object'
        },
        {
            'Endpoint': '/movies/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single movie object'
        },
        {
            'Endpoint': '/movies/id/screen',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of screen object of the movie object'
        },
        {
            'Endpoint': '/movies/id/screen/screenId',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single screen object'
        },
        {
            'Endpoint': '/ticket/ticketId',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single ticket_type object'
        },
        {
            'Endpoint': '/movies/id/screen/screenId/book',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Create new seat object and new booking object'
        },
        {
            'Endpoint': '/movies/id/screen/screenId/getSeatsInfo',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Returns an array of taken seat of the screen object that related to'
        },
        {
            'Endpoint': '/movies/id/screen/screenId/getTicketInfo',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Returns an array of ticket type of the screen object that related to'
        },
        {
            'Endpoint': '/movies/id/screen/screenId/booking/bookingId',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Returns a single booking object'
        },
        {
            'Endpoint': '/movies/id/screen/screenId/booking/bookingId/getSeatInfo',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Returns an array of booking objects by a specific user'
        },
    ]

    return Response(routes)




@api_view(['GET'])
def getMovies(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getMovie(request, id):
    movie = Movie.objects.get(pk=id)
    serializer = MovieSerializer(movie, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getScreensTime(request, id):
    movie = Movie.objects.get(pk=id)
    movieScreens = Screening.objects.filter(movie=movie)
    serializer = ScreenSerializer(movieScreens, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getScreenInfo(request, id, screenId):
    screen = Screening.objects.get(pk = screenId)
    serializer = ScreenSerializer(screen, many = False)
    return Response(serializer.data)


@api_view(['POST'])
def bookTicket(request, id, screenId):
    screen = Screening.objects.get(pk=screenId)
    data = request.data
    seatCode = data['seatCode']
    seatTaken = data['taken']
    ticket = TicketType.objects.get(pk = data['ticket_id'])
    
    seat = Seat.objects.create(
        seatCode=seatCode,
        taken=seatTaken
    )
    booking = Booking.objects.create(
        user=request.user,
        screening=screen,
        seat=seat,
        ticket_type = ticket,
        movie = screen.movie,
        movie_title = screen.movie.title,
        screen_time = screen.time,
        screen_date = screen.date,
        seatCode = seat.seatCode,
        ticket_type_name = ticket.ticket_type,
        ticket_price = ticket.price
    )
    screen.seat.add(booking.seat)
    serializer = BookingSerializer(booking, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def getSeatsInfo(request, id, screenId):
    screen = Screening.objects.get(pk=screenId)
    seatId = screen.seat
    seatSerializer = SeatSerializer(seatId, many = True)
    return Response(seatSerializer.data)

@api_view(['POST'])
def getTicketInfo(request, id, screenId):
    screen = Screening.objects.get(pk = screenId)
    ticketId = screen.ticket_type
    ticketSerializer = TicketSerializer(ticketId, many = True)
    return Response(ticketSerializer.data)

@api_view(['POST'])
def getSeatInfo(request, id, screenId, bookingId):
    booking = Booking.objects.get(pk = bookingId)
    seat = booking.seat
    seatSerializer = SeatSerializer(seat, many = False)
    return Response(seatSerializer.data)

@api_view(['POST'])
def getBookingInfo(request, id, screenId, bookingId):
    booking = Booking.objects.get(pk = bookingId)
    bookingSerializer = BookingSerializer(booking, many = False)
    return Response(bookingSerializer.data)

@api_view(['GET'])
def getTicket(request, ticketId):
    ticket = TicketType.objects.get(pk = ticketId)
    ticketSerializer = TicketSerializer(ticket, many = False)
    return Response(ticketSerializer.data)

@api_view(['POST'])
def getBookingByUser(request):
    booking = Booking.objects.filter(user = request.user.id)
    bookingSerializer = BookingSerializer(booking, many = True)
    return Response(bookingSerializer.data)