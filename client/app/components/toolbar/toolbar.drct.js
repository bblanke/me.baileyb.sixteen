angular.module('blankenship')
  .directive('bbToolbar', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/toolbar/toolbar.tmpl.html',
      controller: 'ToolbarCtrl'
    };
  });
