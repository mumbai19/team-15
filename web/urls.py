from django.urls import path
from . import views

app_name = 'web'

urlpatterns = [
<<<<<<< HEAD
	path('/', views.cust_index, name="cust_index.html"),
=======
	path('customer/', views.cust_index, name="cust_index"),
	path('index/', views.index, name="index"),
>>>>>>> a89785af4a8e4ac3c0749386400935f73ecbaf39
	path('/product/?P<product_id>[0-9]+)/$', views.product_view, name='product_view'),
	path('register/', views.RegisterFormView.as_view(), name='register'),
	path('login/', views.LoginFormView.as_view(), name='login'),
	path('logout/', views.logoutForm, name='logout'),
<<<<<<< HEAD
	
=======
	path('addToCart/', views.addToCart, name="addToCart")	
>>>>>>> a89785af4a8e4ac3c0749386400935f73ecbaf39
]
