/**
* InventoryController
* --- *
*
* Caleb Bodtorf
* 9-29-2016
*/

module.exports = function(app){
  app.controller('InventoryController', ['$scope', 'InventoryService', function($scope, InventoryService){
    $scope.inventory = InventoryService.getInventory()

  }])
}
