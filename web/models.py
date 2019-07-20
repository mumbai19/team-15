from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Role(models.Model):
    role = models.IntegerField()

# class User(models.Model):
#     name = models.CharField(max_length=50)
#     contact = models.CharField(max_length=10)
#     role = models.ForeignKey(Role, on_delete=models.CASCADE,)
#     password = models.CharField(max_length=20)
#     address = models.CharField(max_length=100)



class Product(models.Model):
     name = models.CharField(max_length=50)
     image = models.FileField()
     description = models.CharField(max_length=100)
     user = models.ForeignKey(User, on_delete=models.CASCADE)
     quantity = models.IntegerField()
     price = models.IntegerField()
     category = models.CharField(max_length=100)

