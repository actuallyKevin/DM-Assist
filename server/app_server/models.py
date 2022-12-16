from django.db import models
from django.contrib.auth.models import (AbstractUser)

# Create your models here.
class AppUser(AbstractUser):
    """
    user account
    """
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=150)
    # A user account must be active to log in, etc.
    is_active =  models.BooleanField(default=True)
    REQUIRED_FIELDS = ['email', 'password']