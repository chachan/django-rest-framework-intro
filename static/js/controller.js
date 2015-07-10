var djangoVEControllers = angular.module("djangoVEControllers", []);

djangoVEControllers.controller("taskController", ["$scope", "Task", function ($scope, Task) {
    "use strict";
    $scope.tasks = Task.read();

    var success = function (value, responseHeaders) {
        $scope.tasks = Task.read();
        $scope.task = {};
        Materialize.toast("Task has been saved successfully", 4000)
    };

    var error = function (value, responseHeaders) {
        $scope.tasks = Task.read();
        $scope.task = {};
        Materialize.toast("Oops, something wrong happened", 4000)
    };

    $scope.save = function () {
        if ($scope.task.id === undefined) { // New task
            Task.create($scope.task, success);
        }
        else { // Update task
            Task.update({pk: $scope.task.id}, $scope.task, success)
        }
    };


    $scope.get = function (id) {
        $scope.isNew = false;
        $("#modal").openModal();
        $scope.task = $scope.tasks.filter(function (value) {
            return id === value.id;
        })[0];
    };

}]);
