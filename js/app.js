"use strict";

angular.module("HearthstoneApp", ['ngSanitize', 'ui.router', 'ui.bootstrap'])
.config(function($stateProvider){
        $stateProvider
            //home page
            .state('home', {
                url: '/', //"root" directory
                templateUrl: 'partials/home.html',
                controller: "HomeCtrl"
            })
    })

    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    })

    .controller("HomeCtrl", ["$scope", "$http", function($scope, $http) {
    	$http.get('AllCards.json').then(function(response) {
            $scope.allCards = response.data;
            console.log($scope.allCards);
        });
    }])