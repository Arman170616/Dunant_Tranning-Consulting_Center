from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import TrainerRegistration, ContactMessage
from .serializers import TrainerRegistrationSerializer, ContactMessageSerializer


class TrainerRegistrationView(APIView):
    def post(self, request):
        serializer = TrainerRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'تم التسجيل بنجاح', 'data': serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        registrations = TrainerRegistration.objects.all()
        serializer = TrainerRegistrationSerializer(registrations, many=True)
        return Response(serializer.data)


class ContactMessageView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'تم إرسال رسالتك بنجاح', 'data': serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        messages = ContactMessage.objects.all()
        serializer = ContactMessageSerializer(messages, many=True)
        return Response(serializer.data)
