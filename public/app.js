(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
* BasketController
* --- *
*
* Caleb Bodtorf
* 9-29-2016
*/

module.exports = function(app){
  app.controller('BasketController', ['$scope', function($scope){



  }])
}

},{}],2:[function(require,module,exports){
/**
* FormController
* --- *
*
* Caleb Bodtorf
* 9-29-2016
*/

module.exports = function(app){
  app.controller('FormController', ['$scope', function($scope){



  }])
}

},{}],3:[function(require,module,exports){
/**
* InventoryController
* --- *
*
* Caleb Bodtorf
* 9-29-2016
*/

module.exports = function(app){
  app.controller('InventoryController', ['$scope', function($scope){



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
})();
},{"./controllers/basket.controller":1,"./controllers/form.controller":2,"./controllers/inventory.controller":3,"./services/inventory.service":5}],5:[function(require,module,exports){
/**
* InventoryService
* --- *
*
* Caleb Bodtorf
* 9-29-2016
*/

module.exports = function(app){
  app.factory('InventoryService', ['$http', function($http){



  }])
}

},{}]},{},[4])