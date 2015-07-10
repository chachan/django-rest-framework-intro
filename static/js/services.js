var djangoVEServices = angular.module("djangoVEServices", ["ngResource"]);

djangoVEServices.factory("Task", ["$resource",
    function ($resource) {
        return $resource("api/tasks/", {}, {
            create: {method: "POST"}
        })
    }]);
