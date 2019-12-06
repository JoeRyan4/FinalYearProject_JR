from django.db import models

# Create your models here.
class Text(models.Model):
    text_title = models.CharField(max_length=200)
    text_content = models.TextField()
    text_published = models.DateTimeField('date published')

    def __str__(self):
        return self.text_title