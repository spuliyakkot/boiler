'use strict';

var appControllers = angular.module('controllerModule',[]).
controller('searchSpecController', ['$scope', '$log', 
  function($scope, $log){
    $scope.hasTransactionId = true;
    $scope.$log = $log;

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
    $scope.dateFormat = 'dd-MM-yyyy';

    $scope.partDtTo = new Date();
    $scope.partDtFr = new Date(new Date().setDate(new Date().getDate()-1));

    $scope.clear = function () {
      $scope.dt = null;
    };

    $scope.openFrom = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.dtOpenedFrom = true;
      $scope.dtOpenedTo = false;
    };
    $scope.openTo = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.dtOpenedTo = true;
      $scope.dtOpenedFrom = false;
    };


    $scope.searchWithTransactionId = function(){
      $log.debug($scope.fmwTransactionId);
    };

    $scope.searchFull = function(){

    };
  }]);
/*
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
*/