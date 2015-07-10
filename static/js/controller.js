var djangoVEControllers = angular.module("djangoVEControllers", []);

djangoVEControllers.controller("taskController", ["$scope", "Task", function ($scope, Task) {
    "use strict";
    $scope.tasks = Task.read();

    $scope.create = function () {
        Task.create($scope.task, function (value, responseHeaders) {
            $scope.tasks = Task.read();
            $scope.task = {};
            Materialize.toast("New Task has been added successfully", 4000)
        });
    }
}]);
