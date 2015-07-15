'use strict';

var appControllers = angular.module('controllerModule',[]).
controller('searchSpecController', ['$scope', '$log', 
  function($scope, $log){
    $scope.hasTransactionId = true;
    $scope.$log = $log;
    $scope.processName = undefined;
    $scope.processNames = ['GetEstimatedInvoiceSummary', 'GetCustomerPartyList', 'CrateSalesOrder', 'CustomerPartyEBSV1'];
    $scope.operationName = '%%';

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

appControllers.controller('GridControl', ['$scope', '$http', '$log', function ($scope, $http, $log) {

  $scope.$log = $log;
  $scope.gridOptions = {
    enableSorting: true,
    columnDefs: [
      { field: 'name', minWidth: 200, width: '50%', enableColumnResizing: false },
      { field: 'gender', width: '30%', minWidth: 70 },
      { field: 'company', width: '20%' }
    ]
  };

  $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
    .success(function(data) {
      $scope.gridOptions.data = data;
    });
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