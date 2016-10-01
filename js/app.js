/**
* Work & Co Challenge
* --- *
*
* Caleb Bodtorf
* 9-29-2016
*/
(function() {
'use strict'


var app = angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
    })
    .when('/inventory', {
      templateUrl: 'inventory.html',
      controller: 'InventoryController',
    })
    .when('/form', {
      templateUrl: 'form.html',
      controller: 'FormController',
    })
    .when('/basket', {
      templateUrl: 'basket.html',
      controller: 'BasketController',
    })
    .otherwise({
      redirectTo: '/404',
    })
}])

/**
* Controllers
*/
require('./controllers/form.controller')(app)
require('./controllers/inventory.controller')(app)
require('./controllers/basket.controller')(app)

/**
* Servcies
*/
require('./services/inventory.service')(app)
require('./services/basket.service')(app)

})();
