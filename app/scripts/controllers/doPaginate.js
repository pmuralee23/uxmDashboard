var app = angular.module('F1FeederApp.paginateData',['ui.bootstrap']);



// var app = angular.module('app', ['ui.bootstrap']);

app.controller('TodoController', function($scope) {
   $scope.filteredTodos = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 5;
  
  $scope.makeTodos = function() {
    $scope.todos = [];
    for (i=1;i<=1000;i++) {
      $scope.todos.push({ text:'todo '+i, done:false});
    }
  };
  $scope.makeTodos(); 
  
  $scope.numPages = function () {
    return Math.ceil($scope.todos.length / $scope.numPerPage);
  };
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.filteredTodos = $scope.todos.slice(begin, end);
  });
});

