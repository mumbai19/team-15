from django.urls import path
from . import views

app_name = 'web'

urlpatterns = [
	path('/product/?P<product_id>[0-9]+)/$', views.product_view, name='product_view')
	path('register/', views.RegisterFormView.as_view(), name='register'),
	path('login/', views.LoginFormView.as_view(), name='login'),
	path('logout/', views.logoutForm, name='logout'),
	path('customer/', views.cust_index, name="cust_index"),
]
