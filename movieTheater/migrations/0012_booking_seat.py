# Generated by Django 4.0.2 on 2022-07-05 10:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('movieTheater', '0011_remove_booking_seat_booking_movie'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='seat',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='movieTheater.seat'),
        ),
    ]