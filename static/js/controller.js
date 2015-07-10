var djangoVEControllers = angular.module("djangoVEControllers", []);

djangoVEControllers.controller("taskController", ["$scope", "Task", function ($scope, Task) {
    "use strict";
    $scope.create = function () {
        Task.create($scope.task);
    }
}]);
