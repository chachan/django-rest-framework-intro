var djangoVEServices = angular.module("djangoVEServices", ["ngResource"]);

djangoVEServices.factory("Task", ["$resource",
    function ($resource) {
        return $resource("api/tasks/:pk", {}, {
            create: {method: "POST"},
            read: {method: "GET", isArray: true},
            update: {method: "PUT"}
        });
    }]);
