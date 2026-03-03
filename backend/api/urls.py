from django.urls import path
from .views import TrainerRegistrationView, ContactMessageView

urlpatterns = [
    path('register/', TrainerRegistrationView.as_view(), name='trainer-register'),
    path('contact/', ContactMessageView.as_view(), name='contact-message'),
]
