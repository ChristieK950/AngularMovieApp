'use strict';
//copy your api key in between the '' of the $apiKey = ''
var $apiEndpoint = 'https://api.themoviedb.org/3/',
    $apiKey = 'b6f54a50f5626cb4ec7441bbd4f32e48',
    $imagepath = 'http://image.tmdb.org/t/p/w500',
    $error_noData = 'Oops! No connection to the database.';
// initializes the Angular Module of our app
var movieApp = angular.module('movieApp', ['ngRoute', 'ngAnimate']);
// Configuration and routing
movieApp
    .config(['$httpProvider',
        function ($httpProvider) {

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    ])
    .config(['$routeProvider',
        function ($routeProvider) {

            $routeProvider
                .when('/:page', {
                    controller: 'listController',
                    templateUrl: 'app/views/main.html'
                })
            $routeProvider.otherwise({ 'redirectTo': '/popular' });
        }
    ]);