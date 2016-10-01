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
