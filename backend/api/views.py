from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Service, Contact,Home, About,Moreinfo
from .serializers import ServiceSerializer, ContactSerializer,HomeSerializer, AboutSerializer,MoreinfoSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

class HomeViewSet(viewsets.ModelViewSet):
    queryset = Home.objects.all()       
    serializer_class = HomeSerializer 

class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
@method_decorator(csrf_exempt, name='dispatch')
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
class MoreinfoViewSet(viewsets.ModelViewSet):
    queryset = Moreinfo.objects.all()  
    serializer_class = MoreinfoSerializer
   