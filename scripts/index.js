var app = angular.module("bpratik.in", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("main", { abstract: true, url:"/", templateUrl:"index.html" })
        .state("portfolio", { url: "/portfolio", templateUrl: "portfolio.html" })
        .state("aboutbp", { url: "/about-bp", templateUrl: "about-bp.html" });
});

app.run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        ga("set", "page", toState.url);
        ga('send', 'pageview');
    });
})

app.controller("mainController", function($scope, $state) {        
   
    $scope.tabs = [
        { heading: "portfolio", route:"portfolio", active:false },
        { heading: "about bp", route:"aboutbp", active:false }
    ];
    
    $scope.handleOutboundDownloads = function (event) {
        sendAnalyticsEventBeacon("Outbound Download", event.target.href);
    };
    
    $scope.handleOutboundSocialLinkClicks = function (event) {
        sendAnalyticsEventBeacon("Outbound Social Link", event.target.href);
    };
    
    $scope.handleOutboundLinkClicks = function (event) {
        sendAnalyticsEventBeacon("Outbound Link", event.target.href);
    };
    
    function sendAnalyticsEventBeacon(category, link){
        ga('send', 'event', {
            eventCategory: category,
            eventAction: 'click',
            eventLabel: link,
            transport: 'beacon'
        });
    }

    $scope.active = function(route){
        return $state.is(route);
    };

    $scope.$on("$stateChangeSuccess", function() {
        $scope.tabs.forEach(function(tab) {
            tab.active = $scope.active(tab.route);
        });
    });
});
