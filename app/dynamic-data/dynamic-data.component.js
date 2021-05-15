angular.module("dynamicData").component("dynamicData", {
    templateUrl: "dynamic-data/dynamic-data.template.html",
    bindings: {
        // One-way data binding (<)
        data: "<",
        response: "<",
    },
    // Inject a service from this module into the component controller
    controller: function DynamicDataController(dynamicDataService) {
        var ctrl = this;

        // State
        ctrl.dynamicData = {};
        ctrl.dataMessage = "";
        ctrl.clickCount = 0;

        // Behaviour
        ctrl.updateDynamicData = function () {
            dynamicDataService.getData().then(function (response) {
                console.log(response);
                ctrl.dynamicData = response;
            });

            ctrl.updateDataMessage();
        };

        ctrl.updateDataMessage = function () {
            ctrl.clickCount++;
            ctrl.dataMessage = "Updated for the " + ctrl.clickCount + " time";
        };
    },
});
