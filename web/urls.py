from django.urls import path
from . import views

app_name = 'web'

urlpatterns = [


	path('register/', views.login_user(), name='register'),
	path('login/', views.register(), name='login'),
	path('logout/', views.logoutForm, name='logout'),
]
