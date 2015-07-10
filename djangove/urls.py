from django.conf.urls import patterns, url
from todo import api

urlpatterns = patterns(
    '',
    url(r'^$', 'todo.views.home', name='home'),
    url(r'^api/tasks$', api.TaskListCreateAPIView.as_view(), name='api'),
    url(r'^api/tasks/(?P<pk>\d+)$', api.TaskRetrieveUpdateDestroyAPIView.as_view(), name='api')
)
