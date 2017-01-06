/**
 * Main AngularJS Web Application
 */
var app = angular.module('myWebsite', ['ngRoute']);

// Configure the Routes
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/home/home.html", controller: "HomeCtrl"
    })

    .when("/404", {templateUrl: "app/404.html"})
    .otherwise({redirectTo: '/404'})
}]);