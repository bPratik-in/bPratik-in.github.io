var app = angular.module("bpratik.in", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("main", { abstract: true, url:"/", templateUrl:"index.html" })
        .state("portfolio", { url: "/portfolio", templateUrl: "portfolio.html" })
        .state("aboutbp", { url: "/about-bp", templateUrl: "about-bp.html" });
});

app.controller("mainController", function($scope, $state) {        
   
    $scope.tabs = [
        { heading: "portfolio", route:"portfolio", active:false },
        { heading: "about bp", route:"aboutbp", active:false }
    ];

    $scope.go = function(route){
        $state.go(route);
    };

    $scope.active = function(route){
        return $state.is(route);
    };

    $scope.$on("$stateChangeSuccess", function() {
        $scope.tabs.forEach(function(tab) {
            tab.active = $scope.active(tab.route);
        });
    });
});
