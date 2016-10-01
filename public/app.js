(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
* BasketController
* --- *
*/

module.exports = function(app){

  app.controller('BasketController', ['$scope', 'BasketService', function($scope, BasketService){
    $scope.basket = BasketService.getBasket();

    /**
    * Deletes item from basket.
    * --- *
    * @param {Object} item: from basket.
    */
    $scope.deleteItem = function(item) {
      BasketService.deleteItem(item)
    }

    /**
    * Deletes item from basket.
    * --- *
    * @param {Object} item: from basket.
    */
    $scope.more = function(item) {
      BasketService.addItem(item)
    }

    /**
    * Deletes item from basket.
    * --- *
    * @param {Object} item: from basket.
    */
    $scope.less = function(item) {
      BasketService.decreaseQuantity(item)
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

    /**
    * Adds item to inventory.
    * --- *
    * @param {Object} item: key/values from form.
    */
    $scope.add = function(item) {
      // validates fields
      if ($scope.form.$valid) {
        InventoryService.addItem(item)

        /**
        * Reset form values
        */
        let inputs = Array.from(document.querySelectorAll('.input-field'))
        inputs.forEach(function(el){
          el.value = '';
        })
      }
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

    /**
    * Adds item to basket.
    * --- *
    * @param {Object} item: from inventory.
    */
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

  app.factory('BasketService', [function(){
    let basket = [];

    return {
      /**
      * Returns items in basket.
      */
      getBasket() {

        return basket
      },

      /**
      * Adds item to basket.
      * --- *
      * @param {Object} item: from inventory
      */
      addItem(item) {

        // Validates inventory quantity
        if (item.quantity === 0) {
          console.log("sold out");
        } else {
          // Decrements inventory quantity.
          item.quantity -= 1

          // Checks for duplicate items. Then increments basketQty.
          if (basket.indexOf(item) === -1) {
            basket.push(item)
            item.basketQty = 1
          } else {
            item.basketQty += 1
          }
      }
      },

      /**
      * Deletes item to basket.
      * Makes sure we are deleting correct item.
      * --- *
      * @param {Object} item: from basket
      */
      deleteItem(item) {
        let index = basket.indexOf(item)

        if (index > -1) {
          basket.splice(index, 1)

          // Returns items to inventory.
          item.quantity += item.basketQty
        }
      },

      /**
      * Decrease item quantity.
      * --- *
      * @param {Object} item: from basket
      */
      decreaseQuantity(item) {
        // Makes sure we have at least 1.
        if (item.basketQty > 1) {
          item.basketQty --
          // Returns items to inventory.
          item.quantity ++
        }
      },

      // /**
      // * Increase item quantity.
      // * --- *
      // * @param {Object} item: from basket
      // */
      // increaseQuantity(item) {
      //   // Makes sure we have at least 1.
      //   if (item.basketQty > 1) {
      //     item.basketQty --
      //     // Returns items to inventory.
      //     item.quantity += item.basketQty
      //   }
      // },
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
                      {
                      title: "banana",
                      price: 1.19,
                      quantity: 21,
                    },
                      {
                      title: "avocado",
                      price: 3.09,
                      quantity: 2,
                    },
                      {
                      title: "juice",
                      price: 5.6,
                      quantity: 4,
                    },
                  ];

    return {
      getInventory() {
        return inventory
      },

      /**
      * Adds item to inventory.
      * --- *
      * @param {Object} item: from form.
      */
      addItem(item) {
        inventory.push(item)
      },
    }

  }])

}

},{}]},{},[4])