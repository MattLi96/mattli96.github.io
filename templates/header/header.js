var app = angular.module("myWebsite", []);
app.directive("myHeader", function () {
  return {
    restrict: "E",
    template: "templates/header/header.html"
  };
});