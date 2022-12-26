from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
from .models import *
from dotenv import load_dotenv
from requests_oauthlib import OAuth1
import os
import requests
from random import randint
import pprint

pp = pprint.PrettyPrinter(indent=2, depth=3)
load_dotenv()
# Create your views here.
def index(request):
    index_file = open('static/index.html').read()
    return HttpResponse(index_file)


#! API ROUTES
@api_view(["POST"])
def sign_in(request):
    username = request.data['username']
    password = request.data['password']
    user = authenticate(username=username, password=password)
    if user.is_active and user is not None:
        try:
            login(request._request, user)
            #! request(our modified request) _request(original/unmodified)
            return JsonResponse({'sign_in':True})
        except Exception as e:
            print(e)
            return JsonResponse({'sign_in':False})


    return JsonResponse({'success': True})

@api_view(["GET"])
def current_user(request):
    if request.user.is_authenticated:
        data=serializers.serialize('json', [request.user], fields=['username', 'email'])
        return HttpResponse(data)
    else:
        return JsonResponse({"user":None})

@api_view(["POST"])
def sign_out(request):
    try:
        logout(request._request)
        return JsonResponse({'sign_out': True})
    except Exception as e:
        return JsonResponse({'success': False, 'reason': 'unable to log out'})

@api_view(["POST"])
def sign_up(request):
    print(request.data)
    print('\n\n\n')
    email = request.data['email']
    password = request.data['password']
    username = request.data['username']
    try:
        AppUser.objects.create_user(email=email, password=password, username=username)
        return JsonResponse({'sign_up':True})
    except Exception as e:
        print(str(e))
        return JsonResponse({'sign_up':False})

@api_view(["GET"])
def get_icons(request):
    API_KEY = os.getenv("API_KEY")
    SECRET_KEY = os.getenv("SECRET_KEY")
    auth = OAuth1(API_KEY, SECRET_KEY)
    i = 0
    icons_list = {}
    while (i < 3):
        random_number = randint(0, 999)
        endpoint = f'https://api.thenounproject.com/icon/{random_number}'
        response = requests.get(endpoint, auth=auth)
        response_json = response.json()
        url = response_json['icon']['preview_url']
        icons_list.update({f'url{i}':url})
        i += 1
    return JsonResponse({'icons':icons_list})
    # print('START HERE')
    # print(request)
    # print(request.data)
    # auth = OAuth1(os.getenv("API_KEY"), os.getenv("SECRET_KEY"))
    # print('AUTH FIRED')
    # endpoint = 'https://api.thenounproject.com/icon/5'
    # response = HTTP_Client.get(endpoint, auth=auth)
    # response_json = response.json()
    # print('RESPONSE-JSON', response_json)
    # print('\n\n\n')
    # print('RESPONSE PLAIN', response)
    # url = response_json['icon']['preview_url']
    # data = {'image_url': url}
    # return JsonResponse(data)