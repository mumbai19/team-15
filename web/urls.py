from django.urls import path
from . import views

app_name = 'web'

urlpatterns = [
	path('register/', views.login_user, name='register'),
	path('login/', views.register, name='login'),
	path('logout/', views.logout_user, name='logout'),
	path('customer/', views.cust_index, name="cust_index"),
]
