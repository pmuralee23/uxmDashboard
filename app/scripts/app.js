angular.module('F1FeederApp.controllers', []);

angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'F1FeederApp.switchableGrid',
  'F1FeederApp.paginateData',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/about", {templateUrl: "views/uxm-about.html", controller: "SwitchableGridController"}).
  when("/employees", {templateUrl: "views/uxm-employees.html", controller: "SwitchableGridController"}).
  when("/services", {templateUrl: "views/uxm-services.html", controller: "TodoController"}).
  when("/contactUs", {templateUrl: "views/uxm-contactUs.html", controller: "SwitchableGridController"}).
  otherwise({redirectTo: '/about'});
}]);