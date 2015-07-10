from rest_framework import generics
from rest_framework import serializers
from todo import models


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Task


class TaskListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Task.objects.all()
    serializer_class = TaskSerializer


class TaskRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Task.objects.all()
    serializer_class = TaskSerializer
