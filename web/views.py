from django.views import generic
from django.views.generic import View
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from .forms import RegisterForm
from .models import Product,Bill
from django.models import Q

IMAGE_FILE_TYPES = ['png', 'jpg', 'jpeg']

def login_user(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                if user.is_staff:
                    return render(request, 'web/seller_index.html')
                elif user.is_superuser:
                    return render(request,'web/admin_index.html')
                else:
                    return render(request,'web/cust_index.html')
            else:
                return render(request, 'web/login.html', {'error_message': 'Your account has been disabled'})
        else:
            return render(request, 'web/login.html', {'error_message': 'Invalid login'})
    return render(request, 'web/login.html')


def register(request):
    form = UserForm(request.POST or None)
    if form.is_valid():
        user = form.save(commit=False)
        username = form.cleaned_data['username']
        password = form.cleaned_data['password']
        user.set_password(password)
        user.save()
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return render(request, 'web/index.html')
    context = {
        "form": form,
    }
def logout_user(request):
    logout(request)
    form = UserForm(request.POST or None)
    context = {
        "form": form,
    }
    return render(request, 'web/login.html', context)

def product_view(request, product_id):
    product = Product.objects.get(pk=product_id)
    return render(request, 'web/product.html', {'product': product})

def confirmation(request):
    product = Bill.objects.get(User_id=request.user)
    return render(request, 'web/confirmation.html', {'bill': product})




