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
