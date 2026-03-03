from rest_framework import serializers
from .models import TrainerRegistration, ContactMessage


class TrainerRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainerRegistration
        fields = ['id', 'full_name', 'nationality', 'country', 'city', 'specialization', 'document', 'created_at']
        read_only_fields = ['id', 'created_at']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'full_name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
