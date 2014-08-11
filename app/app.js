angular.module('ngBootstrapApp',['ui.bootstrap','mgcrea.ngStrap']).

  controller('uiBootstrapCtrl',['$scope',function($scope){

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

  }]).

  controller('angularStrapCtrl',['$scope',function($scope){

    $scope.modal = {

      "title" : "Title",

      "content" : "Hello Modal <br /> This is a multiline message!"

    };

  }]);