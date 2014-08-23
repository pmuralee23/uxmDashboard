'use strict';

/**
 * @ngdoc function
 * @name employeeDirectoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the employeeDirectoryApp
 */
angular.module('employeeDirectoryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
