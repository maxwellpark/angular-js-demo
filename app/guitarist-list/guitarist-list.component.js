angular.module("guitaristList").component("guitaristList", {
    // CDO (Component Definition Object)

    // External template
    // URL is relative to index.html
    templateUrl: "guitarist-list/guitarist-list.template.html",

    controller: function GuitaristListController() {
        this.guitarists = [
            {
                name: "John Scofield",
                instrument: "Ibanez AS-50",
            },
            {
                name: "Tim Miller",
                instrument: "Kiesel ZEUS",
            },
            {
                name: "Mark Lettieri",
                instrument: "PRS Fiore",
            },
        ];
    },

    // Inline template
    // template: `<ul>
    // <li ng-repeat="guitarist in $ctrl.guitarists">
    //     <span>{{guitarist.name}}</span>
    //     <p>{{guitarist.instrument}}</p>
    // </li>
    // </ul>
    // `,
});
