/**
* BasketService
* --- *
*/

module.exports = function(app){

  app.factory('BasketService', [function(){
    let basket = [];

    return {
      /**
      * Returns items in basket.
      */
      getBasket() {

        return basket
      },

      /**
      * Adds item to basket.
      * --- *
      * @param {Object} item: from inventory
      */
      addItem(item) {

        // Validates inventory quantity
        if (item.quantity === 0) {
          console.log("sold out");
        } else {
          // Decrements inventory quantity.
          item.quantity -= 1

          // Checks for duplicate items. Then increments basketQty.
          if (basket.indexOf(item) === -1) {
            basket.push(item)
            item.basketQty = 1
          } else {
            item.basketQty += 1
          }
      }
      },

      /**
      * Deletes item to basket.
      * Makes sure we are deleting correct item.
      * --- *
      * @param {Object} item: from basket
      */
      deleteItem(item) {
        let index = basket.indexOf(item)

        if (index > -1) {
          basket.splice(index, 1)

          // Returns items to inventory.
          item.quantity += item.basketQty
        }
      },

      /**
      * Decrease item quantity.
      * --- *
      * @param {Object} item: from basket
      */
      decreaseQuantity(item) {
        // Makes sure we have at least 1.
        if (item.basketQty > 1) {
          item.basketQty --
          // Returns items to inventory.
          item.quantity ++
        }
      },

      // /**
      // * Increase item quantity.
      // * --- *
      // * @param {Object} item: from basket
      // */
      // increaseQuantity(item) {
      //   // Makes sure we have at least 1.
      //   if (item.basketQty > 1) {
      //     item.basketQty --
      //     // Returns items to inventory.
      //     item.quantity += item.basketQty
      //   }
      // },
    }

  }])

}
