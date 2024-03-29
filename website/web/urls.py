from django.urls import path
from . import views

app_name = 'web'

urlpatterns = [
	path('/', views.cust_index, name="cust_index"),
	path('index/', views.index, name="index"),
	path('/product/?P<product_id>[0-9]+)', views.product_view, name='product_view'),
	path('register/', views.RegisterFormView.as_view(), name='register'),
	path('login/', views.LoginFormView.as_view(), name='login'),
	path('logout/', views.logoutForm, name='logout'),
	path('', views.main_page, name='main_page'),
	path('/products',views.products, name='products'),
	#path('/search',views.search,name='search'),
	path('/top_products',views.top_products,name='top_products'),
	path('customer/', views.cust_index, name="cust_index"),
	path('index/', views.index, name="index"),
	path('addToCart/', views.addToCart, name="addToCart")	
]
