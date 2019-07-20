from django.db import models
from django.contrib.auth.models import User


class Customer(models.Model):
	Customer_id = models.AutoField(primary_key=True, max_length=50, blank=False)
	def __str__(self):
		return str(self.Customer_id)


class UserDetails(models.Model):
	user = models.OneToOneField(User,on_delete=models.CASCADE,related_name='profile')
	customer = models.OneToOneField(Customer, on_delete=models.CASCADE, default=1)
