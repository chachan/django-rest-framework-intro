from django.conf.urls import patterns, url

urlpatterns = patterns(
    '',
    url(r'^$', 'todo.views.home', name='home')
)
