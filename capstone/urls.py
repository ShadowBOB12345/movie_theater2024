from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('movieTheater.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('auth/', include('movieTheater.auth.urls'))
]
