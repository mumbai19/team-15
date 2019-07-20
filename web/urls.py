from django.urls import path
from . import views

app_name = 'web'

urlpatterns = [


	path('register/', views.login_user, name='register'),
	path('login/', views.register, name='login'),
	path('logout/', views.logout_user, name='logout'),
	path('/product/?P<product_id>[0-9]+)/$', views.product_view, name='product_view')
	
]
