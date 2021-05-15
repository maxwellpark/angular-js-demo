angular.module("dynamicData").service("dynamicDataService", function ($http, $q) {
    this.getData = function () {
        // Lets us return a promise to be resolved in a module controller
        let deferred = $q.defer();

        $http({
            method: "GET",
            url: "https://www.boredapi.com/api/activity",
        }).then(
            function success(response) {
                deferred.resolve(response.data);
            },
            function error(response) {
                console.log("error");
                deferred.reject();
            }
        );

        return deferred.promise;
    };
});
