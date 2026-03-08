from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = " معهد دونان للاستشارات والتدريب"
admin.site.site_title = "Dunan Institute Admin"
admin.site.index_title = "معهد دونان للاستشارات والتدريب — لوحة الإدارة"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
