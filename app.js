(function () {
'use strict';

angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
       var NarrowIt = this;
       var promise =  MenuSearchService.GetAllItems();

       //Initialize search string
       NarrowIt.search = "";

        // get menu items from the server
       promise.then ( function (response) {
               NarrowIt.Items = response.data.menu_items;
           }
       )

        // handler for click event
       NarrowIt.getMatchedMenuItems = function () {
           NarrowIt.found = NarrowIt.Items.filter(
               function (item) {
                   // if no search string entered, list all menu items.
                   if (!NarrowIt.search)
                       return true;

                   var index = item.description.toLowerCase().indexOf(NarrowIt.search.toLowerCase());

                   if (index === -1) return false;

                   return true;
               }
           )

       }

       NarrowIt.RemoveFromList = function (index) {
          console.log("You want to remove item nr " + index);
           var item = NarrowIt.found.find(
          /*   */   function(item) {
                   if (item.id === index)
                       return true;
               }



           );
           console.log(item.description);
       }
}

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
       var service = this;

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
