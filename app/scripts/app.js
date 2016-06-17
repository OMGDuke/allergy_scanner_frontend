angular.module('happyBellyApp', ['ionic', 'ng-token-auth'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


app.controller("MainController", function($scope, $cordovaBarcodeScanner){
  $scope.scanBarcode = function(){
    $cordovaBarcodeScanner.scan().then(function(imageData){
      alert(imageData.text);
      console.log('format ' + imageData.format);
    }, function(error){
      console.log('an error has occured ' + error);
    });
  };
  $scope.test = function(){
    return 5;
  };
})

.config(function($authProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('sign_up', {
      url: '/sign_up',
      templateUrl: 'views/sign_up.html',
      controller: 'UserController'
    })
    .state('sign_in', {
      url: '/sign_in',
      templateUrl: 'views/sign_in.html'
    })
    .state('search', {
      url: '/',
      templateUrl: 'views/search.html'
    })
    .state('product-info', {
      url: '/product-info',
      templateUrl: 'views/product_info.html'
    });

  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
      apiUrl: 'http://localhost:3000'
  });

});
