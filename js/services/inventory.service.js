/**
* InventoryService
* --- *
*/

module.exports = function(app){

  app.factory('InventoryService', ['$http', function($http){
    let inventory = [
                      {id: 1,
                      title: "banana",
                      price: 1.19,
                      quantity: 21,
                    },
                      {id: 2,
                      title: "avocado",
                      price: 3.09,
                      quantity: 2,
                    },
                      {id: 3,
                      title: "juice",
                      price: 5.60,
                      quantity: 4,
                    },
                  ];

    return {
      getInventory() {
        return inventory
      },

      addItem(item) {
        inventory.push(item)
      },
    }

  }])

}
