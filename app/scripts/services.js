var app = angular.module('F1FeederApp.services',[]);

// app.module('F1FeederApp.services', []);
  app.controller('uxmHome',['$scope', function($scope){
    $scope.active = 'home';
  }]);
  app.factory('uxmAPIservice', function($http) {

    var uxmAPI = {};

    uxmAPI.getEmployees = function(id) {
      return $http({
        dataType: 'JSON', 
        url: 'data/employeeStandings.json?callback=JSON_CALLBACK'
      });
    }

    return uxmAPI;
  });