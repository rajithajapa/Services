var app= angular.module('myApp',[]); 

app.controller('MyCtrl',['$scope','MyService',
                         function($scope, MyService)     {
  $scope.test ="Welcome to Webinar";  
 $scope.getUsers= function(){
       $scope.users= MyService.getUsers();   
  }
 }]);

//test is the model which holds the data
// controller controls the flow of the data
  
//service creation using factory
    app.factory('MyService',['$http',function($http){
        function getUsers(){
            return [{
                name:'User1',
                age:10
            },
               {
                name:'User2',
                age:30
            }     
            ];
        }
        return{
            getUsers: getUsers
        };
        
    }]);
    
