"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
      }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    /**
    * BasketController
    * --- *
    */

    module.exports = function (app) {

      app.controller('BasketController', ['$scope', 'BasketService', function ($scope, BasketService) {
        $scope.basket = BasketService.getBasket();

        /**
        * Deletes item from basket.
        * --- *
        * @param {Object} item: from basket.
        */
        $scope.deleteItem = function (item) {
          BasketService.deleteItem(item);
        };

        /**
        * Deletes item from basket.
        * --- *
        * @param {Object} item: from basket.
        */
        $scope.more = function (item) {
          BasketService.addItem(item);
        };

        /**
        * Deletes item from basket.
        * --- *
        * @param {Object} item: from basket.
        */
        $scope.less = function (item) {
          BasketService.decreaseQuantity(item);
        };
      }]);
    };
  }, {}], 2: [function (require, module, exports) {
    /**
    * FormController
    * --- *
    */

    module.exports = function (app) {

      app.controller('FormController', ['$scope', 'InventoryService', function ($scope, InventoryService) {
        $scope.inventory = InventoryService.getInventory();

        /**
        * Adds item to inventory.
        * --- *
        * @param {Object} item: key/values from form.
        */
        $scope.add = function (item) {
          // validates fields
          if ($scope.form.$valid && checkURL(item.imgUrl)) {
            InventoryService.addItem(item);

            /**
            * Reset form values
            */
            var inputs = Array.from(document.querySelectorAll('.input-field'));
            inputs.forEach(function (el) {
              el.value = '';
            });
          }
        };

        function checkURL(url) {
          return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
        }
      }]);
    };
  }, {}], 3: [function (require, module, exports) {
    /**
    * InventoryController
    * --- *
    */

    module.exports = function (app) {

      app.controller('InventoryController', ['$scope', 'InventoryService', 'BasketService', function ($scope, InventoryService, BasketService) {
        $scope.inventory = InventoryService.getInventory();

        /**
        * Adds item to basket.
        * --- *
        * @param {Object} item: from inventory.
        */
        $scope.addToBasket = function (item) {
          BasketService.addItem(item);
        };
      }]);
    };
  }, {}], 4: [function (require, module, exports) {
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
          redirectTo: '/inventory'
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
          redirectTo: '/404',
          templateUrl: '404.html'
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
  }, { "./controllers/basket.controller": 1, "./controllers/form.controller": 2, "./controllers/inventory.controller": 3, "./services/basket.service": 5, "./services/inventory.service": 6 }], 5: [function (require, module, exports) {
    /**
    * BasketService
    * --- *
    */

    module.exports = function (app) {

      app.factory('BasketService', [function () {
        var basket = [];

        return {
          /**
          * Returns items in basket.
          */
          getBasket: function getBasket() {
            return basket;
          },


          /**
          * Adds item to basket.
          * --- *
          * @param {Object} item: from inventory
          */
          addItem: function addItem(item) {

            // Validates inventory quantity
            if (item.quantity === 0) {
              console.log("sold out");
            } else {
              // Decrements inventory quantity.
              item.quantity -= 1;

              // Checks for duplicate items. Then increments basketQty.
              if (basket.indexOf(item) === -1) {
                basket.push(item);
                item.basketQty = 1;
              } else {
                item.basketQty += 1;
              }
            }
          },


          /**
          * Deletes item to basket.
          * Makes sure we are deleting correct item.
          * --- *
          * @param {Object} item: from basket
          */
          deleteItem: function deleteItem(item) {
            var index = basket.indexOf(item);

            if (index > -1) {
              basket.splice(index, 1);

              // Returns items to inventory.
              item.quantity += item.basketQty;
            }
          },


          /**
          * Decrease item quantity.
          * --- *
          * @param {Object} item: from basket
          */
          decreaseQuantity: function decreaseQuantity(item) {
            // Makes sure we have at least 1.
            if (item.basketQty > 1) {
              item.basketQty--;
              // Returns items to inventory.
              item.quantity++;
            }
          }
        };
      }]);
    };
  }, {}], 6: [function (require, module, exports) {
    /**
    * InventoryService
    * --- *
    */

    module.exports = function (app) {

      app.factory('InventoryService', ['$http', function ($http) {
        var inventory = [{
          title: "Carolina Reaper",
          price: 10.19,
          quantity: 2,
          imgUrl: 'https://www.cayennediane.com/wp-content/uploads/Carolina-Reaper-02.jpg'
        }, {
          title: "Trinidad Moruga Scorpion",
          price: 8.09,
          quantity: 4,
          imgUrl: 'https://www.cayennediane.com/wp-content/uploads/Trinidad_Moruga_Scorpion1.jpg'
        }, {
          title: "Pod Douglah",
          price: 5.63,
          quantity: 8,
          imgUrl: 'https://www.cayennediane.com/wp-content/uploads/7-Pot-Douglah-640x640.jpg'
        }, {
          title: "7 Pot Brown",
          price: 1.69,
          quantity: 15,
          imgUrl: 'https://www.cayennediane.com/wp-content/uploads/7-pot-brown2'
        }, {
          title: "7 Pot Primo",
          price: 3.61,
          quantity: 34,
          imgUrl: 'https://www.cayennediane.com/wp-content/uploads/7-Pot-Primo-2.jpg'
        }, {
          title: "Komodo Dragon",
          price: 2.6,
          quantity: 20,
          imgUrl: 'https://www.cayennediane.com/wp-content/uploads/Komodo-Dragon-2.jpg'
        }, {
          title: "Naga Viper",
          price: 2.93,
          quantity: 29,
          imgUrl: 'https://www.cayennediane.com/wp-content/uploads/naga-viper.jpeg'
        }, {
          title: "Bhut Jolokia",
          price: 3.23,
          quantity: 19,
          imgUrl: 'https://www.cayennediane.com/wp-content/uploads/Ghost-Pepper-Plant-02.jpg'
        }];

        return {
          getInventory: function getInventory() {
            return inventory;
          },


          /**
          * Adds item to inventory.
          * --- *
          * @param {Object} item: from form.
          */
          addItem: function addItem(item) {
            inventory.push(item);
          }
        };
      }]);
    };
  }, {}] }, {}, [4]);