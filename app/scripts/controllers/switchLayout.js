var app = angular.module('F1FeederApp.switchableGrid',[]);
app.

  /* Drivers controller */
  controller('SwitchableGridController', function($scope, uxmAPIservice) {
    $scope.layout = 'grid';

	$scope.pics = []; 
   

    uxmAPIservice.getEmployees().success(function (response) {
      
        //Digging into the response to get the relevant data
        $scope.pics = response;
    });
  });

