(function () {
'use strict';

angular.module('shoppingListModule', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService)

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        var ToBuy = this;

        ToBuy.Items = ShoppingListService.getItemsToBuy();
    }

    AlreadyBoughtController.$inject = ['$scope'];
    function AlreadyBoughtController(ShoppingListService) {
        var Bought = this;
    }

    function ShoppingListService() {
        var service = this;
        // List of shopping items
        var itemsToBuy = [{name: 'Cookies', quantity: 10},
            {name: 'Donuts', quantity: 15},
            {name: 'Chips', quantity: 3},
            {name: 'Bounty', quantity: 8},
            {name: 'Milk', quantity: 2}
            ];


        service.getItemsToBuy = function () {
            return itemsToBuy;
        }
    };
})();
