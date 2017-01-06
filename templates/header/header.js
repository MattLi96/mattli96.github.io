angular.module("myWebsite").directive("myHeader", function () {
  return {
    restrict: "E",
    templateUrl: "templates/header/header.html"
  };
});