from django.db import models


class TrainerRegistration(models.Model):
    COUNTRY_CHOICES = [
        ('oman', 'عُمان'),
        ('saudi', 'السعودية'),
        ('uae', 'الإمارات'),
        ('kuwait', 'الكويت'),
        ('qatar', 'قطر'),
        ('bahrain', 'البحرين'),
        ('other', 'أخرى'),
    ]

    full_name = models.CharField(max_length=255)
    nationality = models.CharField(max_length=100)
    country = models.CharField(max_length=50, choices=COUNTRY_CHOICES)
    city = models.CharField(max_length=100)
    specialization = models.CharField(max_length=255)
    document = models.FileField(upload_to='documents/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.country}"

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Trainer Registration'
        verbose_name_plural = 'Trainer Registrations'


class ContactMessage(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.subject}"

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Message'
        verbose_name_plural = 'Contact Messages'
