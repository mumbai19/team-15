from django.urls import path
from . import views

app_name = 'web'

urlpatterns = [

	path('index/', views.index, name="index"),

	path('register/', views.RegisterFormView.as_view(), name='register'),
	path('login/', views.LoginFormView.as_view(), name='login'),
	path('logout/', views.logoutForm, name='logout'),

	path('addToCart/', views.addToCart, name="addToCart")	

]
