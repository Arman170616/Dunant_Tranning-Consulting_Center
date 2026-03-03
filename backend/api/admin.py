from django.contrib import admin
from .models import TrainerRegistration, ContactMessage


@admin.register(TrainerRegistration)
class TrainerRegistrationAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'nationality', 'country', 'city', 'specialization', 'created_at']
    list_filter = ['country', 'created_at']
    search_fields = ['full_name', 'nationality', 'city', 'specialization']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'subject', 'created_at']
    list_filter = ['created_at']
    search_fields = ['full_name', 'email', 'subject']
