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
