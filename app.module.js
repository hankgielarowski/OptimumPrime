angular
  .module('prime',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'NewPrimeController'
      })
      .when('/prime-page', {
        templateUrl: "templates/prime-page.html",
        controller: "NewPrimeController"
      })
})
