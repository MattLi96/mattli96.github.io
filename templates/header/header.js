var app = angular.module("myWebsite", []);
app.directive("myHeader", function () {
  return {
    restrict: "E",
    templateUrl: "templates/header/header.html"
  };
});