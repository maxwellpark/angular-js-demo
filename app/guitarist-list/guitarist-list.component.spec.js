const { beforeEach, describe, it, expect } = require("@jest/globals");

describe("guitaristList", function () {
    // Load the module that contains this component
    beforeEach(module("myApp"));

    describe("GuitaristListController", function () {
        // Inject componentController service for instantiating this component's controller for testing
        it("Should create a 'guitarists' model with 3 guitarists", inject(function (
            $componentController
        ) {
            var ctrl = $componentController("guitaristList");

            // Make assertion
            expect(ctrl.guitarists.length).toBe(3);
        }));
    });
});
