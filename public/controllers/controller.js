var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {
        console.log("Hello World from controller");

        $http.get('/contactlist');

        person1 = {
            name: 'Tim',
            email: 'tim@example.com',
            phone: '(810) 555-3443'
        };
        person2 = {
            name: 'Jonas',
            email: 'jonas@example.com',
            phone: '(252) 555-8743'
        };
        person3 = {
            name: 'Rick',
            email: 'gorick@example.com',
            phone: '(310) 555-6789'
        };
        person4 = {
            name: 'Fabian',
            email: 'fabguy@example.com',
            phone: '(513) 555-2385'
        };
        person5 = {
            name: 'Luc',
            email: 'lucteam@example.com',
            phone: '(619) 555-6550'
        };

        var contactlist = [person1, person2, person3, person4, person5];
        $scope.contactlist = contactlist;
    }



]);








