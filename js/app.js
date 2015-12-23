"use strict";

angular.module("HearthstoneApp", ['ngSanitize', 'ui.router', 'ui.bootstrap'])
.config(function($stateProvider){
        $stateProvider
            //home page
            .state('home', {
                url: '/', //"root" directory
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            })
            .state('browse', {
                url: '/browse',
                templateUrl: 'partials/browse.html',
                controller: 'BrowseCtrl'
            })
            .state('build', {
                url: '/build',
                templateUrl: 'partials/build.html',
                controller: 'BuildCtrl'
            })
    })

    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    })

    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
    	$http.get('AllCards.json').then(function(response) {
            $scope.allCards = response.data;
            console.log($scope.allCards);
        });
    }])

    .controller('BrowseCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('AllCards.json').then(function(response) {
            $scope.allCards = response.data;
            console.log($scope.allCards);
        });
    }])