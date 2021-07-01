from rest_framework import routers

from .views import BlogCategoryViewSet, BlogPostViewSet


urlpatterns = [

]

router = routers.SimpleRouter()
router.register('categories', BlogCategoryViewSet, basename="category")
router.register('posts', BlogPostViewSet, basename="posts")

urlpatterns += router.urls
