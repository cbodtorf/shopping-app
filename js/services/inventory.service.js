/**
* InventoryService
* --- *
*/

module.exports = function(app){

  app.factory('InventoryService', ['$http', function($http){
    let inventory = [
                      {
                      title: "banana",
                      price: 1.19,
                      quantity: 21,
                    },
                      {
                      title: "avocado",
                      price: 3.09,
                      quantity: 2,
                    },
                      {
                      title: "juice",
                      price: 5.6,
                      quantity: 4,
                    },
                  ];

    return {
      getInventory() {
        return inventory
      },

      /**
      * Adds item to inventory.
      * --- *
      * @param {Object} item: from form.
      */
      addItem(item) {
        inventory.push(item)
      },
    }

  }])

}
