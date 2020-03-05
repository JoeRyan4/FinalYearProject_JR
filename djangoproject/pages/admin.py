from django.contrib import admin
from .models import*
# Register your models here.

class Admin_class(admin.ModelAdmin):
	list_display = ('id','username')
admin.site.register(Admin , Admin_class)

class Warehouse_class(admin.ModelAdmin):
	list_display = ('id','name','address','city','pincode','w_username')
admin.site.register(Warehouse , Warehouse_class)