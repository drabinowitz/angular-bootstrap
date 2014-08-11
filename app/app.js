angular.module('ngBootstrapApp',['ui.bootstrap']).

  controller('uiBootstrapAccordionCtrl',['$scope',function($scope){

    $scope.accordion = [

      {

        title:'first',

        content:'first content'

      },

      {

        title:'second',

        content:'second content'

      }

    ];

  }]);