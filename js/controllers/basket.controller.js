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
