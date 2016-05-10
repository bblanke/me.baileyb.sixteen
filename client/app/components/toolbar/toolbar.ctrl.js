angular.module('blankenship')
  .controller("ToolbarCtrl", ["$scope", "$state", function($scope, $state){
    $scope.state = "home";
    $scope.$watch("state", function(newState, currentState){
      $state.transitionTo(newState);
    });
  }]);
