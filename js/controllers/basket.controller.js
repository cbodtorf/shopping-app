/**
* BasketController
* --- *
*/

module.exports = function(app){

  app.controller('BasketController', ['$scope', 'BasketService', function($scope, BasketService){
    $scope.basket = BasketService.getBasket();

    $scope.deleteItem = function(item) {
      BasketService.deleteItem(item)
    }
  }])

}
