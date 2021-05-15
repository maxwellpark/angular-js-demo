// Inject module dependencies in the array parameter
var myApp = angular.module("myApp", ["guitaristList", "dynamicData", "ngAnimate"]);

myApp.controller("MainController", [
    "$scope",
    "dynamicDataService",
    // Inject services in the controller function parameter
    function ($scope, dynamicDataService) {
        $scope.welcome = "Welcome to";

        $scope.data = {
            foo: "bar",
            baz: "qux",
        };

        $scope.apiResponse = {};

        $scope.modifyData = async function () {
            $scope.data.foo = "modifiedBar";
            $scope.data.baz = "modifiedQux";

            // Get data from external resource and update this controller's state
            dynamicDataService.getData().then(function (response) {
                $scope.apiResponse = response;
            });
        };
    },
]);

// Example component
myApp.component("myComponent", {
    // Access controller state through $ctrl
    template: "Hello, {{$ctrl.user}}",

    controller: function MyComponentController() {
        this.user = "Max";
    },
});
