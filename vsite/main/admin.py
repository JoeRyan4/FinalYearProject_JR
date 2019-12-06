from django.contrib import admin
from .models import Text
from django.db import models


class TextAdmin(admin.ModelAdmin):
    fieldsets = [("Title/date", {'fields': ["text_title", "text_published"]}),
        ("Content", {"fields": ["text_content"]})]


# Register your models here.
admin.site.register(Text, TextAdmin)
