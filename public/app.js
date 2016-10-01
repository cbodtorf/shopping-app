(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
* BasketController
* --- *
*/

module.exports = function(app){

  app.controller('BasketController', ['$scope', 'BasketService', function($scope, BasketService){
    $scope.basket = BasketService.getBasket();

    $scope.deleteItem = function(item) {
      BasketService.deleteItem(item)
    }
  }])

}

},{}],2:[function(require,module,exports){
/**
* FormController
* --- *
*/

module.exports = function(app){

  app.controller('FormController', ['$scope', 'InventoryService', function($scope, InventoryService){
    $scope.inventory = InventoryService.getInventory()

    $scope.add = function(item) {
      InventoryService.addItem(item)
    }

  }])

}

},{}],3:[function(require,module,exports){
/**
* InventoryController
* --- *
*/

module.exports = function(app){

  app.controller('InventoryController', ['$scope', 'InventoryService', 'BasketService', function($scope, InventoryService, BasketService){
    $scope.inventory = InventoryService.getInventory()

    $scope.addToBasket = function(item) {
      BasketService.addItem(item)
    }

  }])

}

},{}],4:[function(require,module,exports){
'use strict';

/**
* Work & Co Challenge
* --- *
*
* Caleb Bodtorf
* 9-29-2016
*/
(function () {
  'use strict';

  var app = angular.module('myApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home.html'
    }).when('/inventory', {
      templateUrl: 'inventory.html',
      controller: 'InventoryController'
    }).when('/form', {
      templateUrl: 'form.html',
      controller: 'FormController'
    }).when('/basket', {
      templateUrl: 'basket.html',
      controller: 'BasketController'
    }).otherwise({
      redirectTo: '/404'
    });
  }]);

  /**
  * Controllers
  */
  require('./controllers/form.controller')(app);
  require('./controllers/inventory.controller')(app);
  require('./controllers/basket.controller')(app);

  /**
  * Servcies
  */
  require('./services/inventory.service')(app);
  require('./services/basket.service')(app);
})();
},{"./controllers/basket.controller":1,"./controllers/form.controller":2,"./controllers/inventory.controller":3,"./services/basket.service":5,"./services/inventory.service":6}],5:[function(require,module,exports){
/**
* BasketService
* --- *
*/

module.exports = function(app){

  app.factory('BasketService', ['$http', function($http){
    let basket = [];

    return {
      getBasket() {
        return basket
      },

      addItem(item) {
        if (item.quantity === 0) {
          console.log("sold out");
        } else {
          item.quantity -= 1

          if (basket.indexOf(item) === -1) {
            basket.push(item)
            item.basketQty = 1
          } else {
            item.basketQty += 1
          }
      }
      },

      deleteItem(item) {
        let index = basket.indexOf(item)

        if (index > -1) {
          basket.splice(index, 1)
          item.quantity += item.basketQty
        }
      },
    }

  }])

}

},{}],6:[function(require,module,exports){
/**
* InventoryService
* --- *
*/

module.exports = function(app){

  app.factory('InventoryService', ['$http', function($http){
    let inventory = [
                      {id: 1,
                      title: "banana",
                      price: 1.19,
                      quantity: 21,
                    },
                      {id: 2,
                      title: "avocado",
                      price: 3.09,
                      quantity: 2,
                    },
                      {id: 3,
                      title: "juice",
                      price: 5.60,
                      quantity: 4,
                    },
                  ];

    return {
      getInventory() {
        return inventory
      },

      addItem(item) {
        inventory.push(item)
      },
    }

  }])

}

},{}]},{},[4])