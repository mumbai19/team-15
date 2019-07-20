from django.views import generic
from django.views.generic import View
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from .forms import RegisterForm
from .models import Product,Bill,Order
from django.models import Q
from .forms import UserForm
from django.http import HttpResponse
from .forms import LoginForm, RegisterForm

IMAGE_FILE_TYPES = ['png', 'jpg', 'jpeg']
from django.http import JsonResponse
from django.contrib.auth.models import User
def index(request):
	return JsonResponse({'hello':"world"})

class RegisterFormView(View):
	form_class = RegisterForm
	template_name = 'web/register.html'

	def get(self, request):
		print('Get request on register form')
		form = self.form_class(None)
		error, err_email = '', ''
		try:
			error = request.session.get('err_mess', '')
			err_email = request.session.get('err_email', '')
			del request.session['err_email']
			del request.session['err_mess']
		except:
			pass
		print(error+" ")

		return render(request, self.template_name, {'cart_size' : request.session.get('cart_size', 0),'form':form, 'err_email': err_email, 'register_error': error})


	def post(self, request):
		form = self.form_class(request.POST)
		print(str(form.is_valid()))
		print(str(form.errors))
		if "already exists" in str(form.errors):
			request.session['err_email'] = request.POST.get('username', '')
			request.session['err_mess'] = "duplicate"
			return redirect('/register/')

		if form.is_valid():
			print('Valid register form')
			user = form.save(commit=False)
			print("cleaning data")
			username = form.cleaned_data['username']
			password = form.cleaned_data['password']

			acount = 0
			for cr in username:
				if cr == "@":
					acount += 1

			if acount != 1:
				request.session['err_mess'] = "invalidemail"
				return redirect('/register/')


			# gender = request.POST['gender']

			prevuser = User.objects.filter(email=username)
			print(str(prevuser.count())+' count of user')
			if prevuser.count()>0:
				print('duplicate email')
				request.session['err_mess'] = "duplicate"
				return redirect('/register/')
			
			user.set_password(password)
			user.email = username
			user.save()
			user = authenticate(username=username, password=password)

			if user is not None:
				print(user.is_active)
				if user.is_active:
					print("loggin user")
					login(request, user)
					print('REdirect check for login')
					return redirect('web:index')
				else:
					print('The user acccount is disabled')
					return redirect('/login/?login=disabled')
			else:
				return redirect('/login/?login=failed')
				print('The username and password is wrong')
		


class LoginFormView(View):
	form_class = LoginForm
	template_name = 'web/login.html'
	def get(self, request):
		error = request.GET.get('login_error', '')
		if str(request.GET.get('m')) == '3' :
			error = 'login_to_checkout'

		form = self.form_class(None)
		print("Error Value = "+error)
		return render(request, self.template_name, {'cart_size' : request.session.get('cart_size', 0),'form':form, 'login_error': error })


	def post(self, request):
		print('received an post request for login')
		form = self.form_class(request.POST)
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(username=username, password=password)
		useremail = User.objects.filter(email=username)

		if user is not None:
			if user.is_active:
				login(request, user)
                if user.is_staff:
                    return render('web/seller_index.html')
                elif user.is_superuser:
                    return render('web/admin_index.html')
                else:
				    return redirect('web/cust_index.html')
			else:
				print('The user acccount is disabled')
				return redirect('/login?login_error=disabled')
		else:
			print('The username and password is wrong')
			if useremail.count()>0:
				return redirect('/login?login_error=incorrect')
			else:
				return redirect('/login?login_error=failed')
		

def product_view(request, product_id):
    product = Product.objects.get(pk=product_id)
    return render(request, 'web/product.html', {'product': product})

def confirmation(request):
    product = Bill.objects.get(User_id=request.user)
    return render(request, 'web/confirmation.html', {'bill': product})



def cust_index(request):
    products = Product.objects.all()
    top_products= Order.objects.values('product_id').annotate(c_p= Sum('product_id').order_by('c_p'))
    return render(request,'cust_index.html',{'products':product})

def top_products(request):
    top_products= Order.objects.values('product_id').annotate(c_p= Sum('product_id').order_by('c_p'))
    return render(request,{'top_products':top_products})

def logoutForm(request):
	logout(request)
	print("logout called, user logged out")
	# Redirect to a success page.
	return redirect('web:index')

def main_page(request):
    return render('web/main_page.html')

def products(request):
    return render('web/cust_index.html')

def search(request):
    query = request.GET.get("q")
        if query:
            product = Product.filter(
                Q(name__icontains=query) |
                Q(price__icontains=query)
            ).distinct()
            return render(request, 'web/product/'+product.id)