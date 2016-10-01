/**
* BasketService
* --- *
*/

module.exports = function(app){

  app.factory('BasketService', ['$http', function($http){
    let basket = [];

    return {
      getBasket() {
        return basket
      },

      addItem(item) {
        if (item.quantity === 0) {
          console.log("sold out");
        } else {
          item.quantity -= 1

          if (basket.indexOf(item) === -1) {
            basket.push(item)
            item.basketQty = 1
          } else {
            item.basketQty += 1
          }
      }
      },

      deleteItem(item) {
        let index = basket.indexOf(item)

        if (index > -1) {
          basket.splice(index, 1)
          item.quantity += item.basketQty
        }
      },
    }

  }])

}
