from django.contrib import admin
from .models import*
# Register your models here.

class Admin_class(admin.ModelAdmin):
	list_display = ('id','username')
admin.site.register(Admin , Admin_class)

class Warehouse_class(admin.ModelAdmin):
	list_display = ('id','name','address','city','pincode','w_username')
admin.site.register(Warehouse , Warehouse_class)

#class Package_class(admin.ModelAdmin):
#	list_display = ('id','package_id','awb_no','receiver_name','mobile_no','from_address','from_city','from_pincode','cost','status','weight')
#admin.site.register(Package , Package_class)


# class Check_Detail_class(admin.ModelAdmin):
	# list_display = ('id','package_awb_number','Warehouse_name','date','time','check_status')
# admin.site.register(Check_Detail ,Check_Detail_class)

#	list_display = ('id','check_awb_no','type','date','time','check_io_status')
admin.site.register(Check_In_Out_Table ,Check_In_Out_Table_class)
