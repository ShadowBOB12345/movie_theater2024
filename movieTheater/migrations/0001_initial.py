# Generated by Django 4.0.2 on 2022-06-28 02:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=155)),
                ('description', models.TextField()),
                ('image', models.CharField(max_length=500)),
                ('trailer', models.CharField(max_length=200)),
                ('duration', models.DurationField(blank=True, null=True)),
                ('genres', models.ManyToManyField(blank=True, related_name='movieGenres', to='movieTheater.Genre')),
            ],
        ),
        migrations.CreateModel(
            name='Seat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seatCode', models.CharField(max_length=15)),
                ('taken', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Theater',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Theater', max_length=10)),
                ('seat', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.FloatField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Screening',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(null=True)),
                ('time', models.TimeField(null=True)),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='movieTime', to='movieTheater.movie')),
                ('seat', models.ManyToManyField(blank=True, related_name='screen_seat', to='movieTheater.Seat')),
                ('theater', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movieTheater.theater')),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movieTheater.ticket')),
            ],
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('screening', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movieTheater.screening')),
                ('seat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movieTheater.seat')),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movieTheater.ticket')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
