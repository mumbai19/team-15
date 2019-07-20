from django.urls import path
from . import views

app_name = 'web'

urlpatterns = [
<<<<<<< HEAD
	path('register/', views.login_user, name='register'),
	path('login/', views.register, name='login'),
	path('logout/', views.logout_user, name='logout'),
	path('customer/', views.cust_index, name="cust_index"),
=======

	path('index/', views.index, name="index"),

	path('register/', views.RegisterFormView.as_view(), name='register'),
	path('login/', views.LoginFormView.as_view(), name='login'),
	path('logout/', views.logoutForm, name='logout'),

	path('addToCart/', views.addToCart, name="addToCart")	

>>>>>>> 20cb2590fa1c9b14eb106eb068e3d774a04a2bd3
]
