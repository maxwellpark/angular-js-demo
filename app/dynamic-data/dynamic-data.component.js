angular.module("dynamicData").component("dynamicData", {
    templateUrl: "dynamic-data/dynamic-data.template.html",
    bindings: {
        // One-way data binding (<)
        data: "<",
        response: "<",
    },
});
