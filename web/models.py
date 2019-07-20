from django.db import models
from django.contrib.auth.models import User
from datetime import datetime   

class Customer(models.Model):
	Customer_id = models.AutoField(primary_key=True, max_length=50, blank=False)
	phone_number = models.CharField(max_length=15)
	address = models.CharField(max_length=1000)

	def __str__(self):
		return str(self.Customer_id)

class UserDetails(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='profile')
	customer = models.OneToOneField(Customer, on_delete=models.CASCADE, default=1)

class Product(models.Model):
	Product_id = models.AutoField(primary_key=True, blank=False, max_length=50)
	name = models.CharField(max_length=50)
	image = models.FileField()
	description = models.CharField(max_length=100)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	quantity = models.IntegerField()
	price = models.IntegerField()
	category = models.CharField(max_length=100)

class Order(models.Model):
	Order_id = models.AutoField(primary_key=True, blank=False, max_length=50)
	Product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
	User_id = models.ForeignKey(User, on_delete=models.CASCADE)
	heading = models.CharField(blank=False, max_length=20, null=True)
	quantity = models.IntegerField(blank=True, default=0)
	
	def __str__(self):
		return str(self.Order_id)

class Bill(models.Model):
	Bill_id = models.AutoField(primary_key=True, blank=False, max_length=50)
	User_id = models.ForeignKey(User, on_delete=models.CASCADE)
	Order_id = models.CharField(max_length=100, null=True)
	invoice_url = models.CharField(max_length=1000)
	datetime = models.DateTimeField(auto_now_add=True, blank=True)
	shipping_charges = models.IntegerField(blank=False, default=50)
	order_status = models.IntegerField(default=0)
	delivered_datetime = models.DateTimeField(auto_now_add=True, blank=True)
	
	def __str__(self):
		return str(self.Order_id)

class Review(models.Model):
	review = models.CharField(max_length=1000)
	rating = models.IntegerField()
	Product_id = models.ForeignKey(Product, on_delete=models.CASCADE)



# dimension
# logo
# number


