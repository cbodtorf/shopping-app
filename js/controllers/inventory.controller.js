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
