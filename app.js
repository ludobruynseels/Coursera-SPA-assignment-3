(function () {
'use strict';

angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
       var NarrowIt = this;
       var promise =  MenuSearchService.GetAllItems();

       promise.then ( function (response) {
               NarrowIt.Items = response.data.menu_items;
           }
       )
    }
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
       var service = this;
 /**/
       service.GetAllItems = function () {
           var response = $http(
               {
                   method: "GET",
                   url: " https://davids-restaurant.herokuapp.com/menu_items.json"
               }
           )

           return response;
       }
    }
})();
