angular
  .module('prime')
  .controller('HomeController', function($scope) {

  })
  .controller('NewPrimeController', function($scope, NewPrimeService) {
    $scope.wallstreetprime = undefined;

      NewPrimeService.getWallStPrime()
        .then(function(data) {
          console.log(data);

          $scope.name = data.data.dataset.name;
          $scope.data = data.data.dataset.data[0][1];



        });

  

  })
