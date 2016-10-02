/**
* FormController
* --- *
*/

module.exports = function(app){

  app.controller('FormController', ['$scope', 'InventoryService', '$location', function($scope, InventoryService, $location){
    $scope.inventory = InventoryService.getInventory()

    /**
    * Adds item to inventory.
    * --- *
    * @param {Object} item: key/values from form.
    */
    $scope.add = function(item) {
      // validates url and supplies a default img if empty or wrong.
      if (item.imgUrl === undefined || item.imgUrl === null) {
        item.imgUrl = 'http://www.cinderellaeco.com/media/zoo/images/default_cf357d51de5d6f1ed11130a98457a00a.jpg'
      }

      // validates fields
      if ($scope.form.$valid && checkURL(item.imgUrl)) {
        InventoryService.addItem(item)
        $location.path('/inventory')

        /**
        * Reset form values
        */
        let inputs = Array.from(document.querySelectorAll('.input-field'))
        inputs.forEach(function(el){
          el.value = ''
        })
      }
    }

    function checkURL(url) {
      return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

  }])

}
