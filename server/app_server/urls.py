from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('signin/', views.index),
    path('api/signIn/', views.sign_in),
    path('signUp/', views.sign_up),
    path('signOut/', views.sign_out),
    path('current_user/', views.current_user),
    path('api/get_icons/', views.get_icons)
]