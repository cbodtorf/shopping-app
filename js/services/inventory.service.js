/**
* InventoryService
* --- *
*/

module.exports = function(app){

  app.factory('InventoryService', ['$http', function($http){
    let inventory = [
                      {
                      title: "Carolina Reaper",
                      price: 10.19,
                      quantity: 2,
                      imgUrl: 'https://www.cayennediane.com/wp-content/uploads/Carolina-Reaper-02.jpg',
                    },
                      {
                      title: "Trinidad Moruga Scorpion",
                      price: 8.09,
                      quantity: 4,
                      imgUrl: 'https://www.cayennediane.com/wp-content/uploads/Trinidad_Moruga_Scorpion1.jpg',
                    },
                      {
                      title: "Pod Douglah",
                      price: 5.63,
                      quantity: 8,
                      imgUrl: 'https://www.cayennediane.com/wp-content/uploads/7-Pot-Douglah-640x640.jpg',
                    },
                      {
                      title: "7 Pot Brown",
                      price: 1.69,
                      quantity: 15,
                      imgUrl: 'https://www.cayennediane.com/wp-content/uploads/7-pot-brown2',
                    },
                      {
                      title: "7 Pot Primo",
                      price: 3.61,
                      quantity: 34,
                      imgUrl: 'https://www.cayennediane.com/wp-content/uploads/7-Pot-Primo-2.jpg',
                    },
                      {
                      title: "Komodo Dragon",
                      price: 2.6,
                      quantity: 20,
                      imgUrl: 'https://www.cayennediane.com/wp-content/uploads/Komodo-Dragon-2.jpg',
                    },
                      {
                      title: "Naga Viper",
                      price: 2.93,
                      quantity: 29,
                      imgUrl: 'https://www.cayennediane.com/wp-content/uploads/naga-viper.jpeg',
                    },
                      {
                      title: "Bhut Jolokia",
                      price: 3.23,
                      quantity: 19,
                      imgUrl: 'https://www.cayennediane.com/wp-content/uploads/Ghost-Pepper-Plant-02.jpg',
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
