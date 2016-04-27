angular
  .module('prime')
  .service('NewPrimeService', function($http) {

    function getWallStPrime() {
      return $http.get('https://www.quandl.com/api/v3/datasets/WSJ/PRUSA.json?auth_token=DvBySDpJab5cd_YaBaDo')
    }


    return {
    getWallStPrime: getWallStPrime,
}
})
