
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.eligibility', {
            url: '/eligibility',
            templateUrl: 'form-eligibility.html'
        })
        
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })
        
        .state('ineligible', {
            url: '/ineligible',
            templateUrl: 'ineligible.html'
        })
        
        
        .state('nocomprende', {
            url: '/nocomprende',
            templateUrl: 'nocomprende.html'
        })
        
        
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        })
        
        
        .state('form.sharing', {
            url: '/sharing',
            templateUrl: 'form-sharing.html'
        })
        
        
        
        // url will be /form/comprehension
        .state('form.comprehension', {
            url: '/comprehension',
            templateUrl: 'form-comprehension.html'
        })
          
        
        
        // url will be /form/join-study
        .state('form.joinstudy', {
            url: '/join-study',
            templateUrl: 'form-joinstudy.html'
        })
        
        // url will be /form/check-eligibility
        .state('checkeligibility', {
            url: '/check-eligibility',
            controller: 'eligibilitycheckController'
        })
        
        
        // url will be /consent
        .state('form.consent', {
            url: '/consent',
            templateUrl: 'consent.html'
        })
        
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/about');
})




.run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })



// our controller for the form
// =================================================
.controller('formController', function($scope) {
    
    
    // Create a randowm number
    var random =  Math.floor((Math.random() * 9000000000) + 1000000000);
    // we will store all of our form data in this object
    console.log($scope.formData);
    if (!$scope.formData) {
        //code
        console.log("$scope.formData undefined");
        
        $scope.formData = {"random_id": random};
    }
    
    
    // function to process the form
    $scope.processForm = function() {
        
        console.log($scope.formData);
        alert('POST form contents to webservice');
        
    };
    
    
    // function to process the form
    $scope.checkEligibility = function() {
        if ($scope.formData.english_comfort === "yes" &&
            $scope.formData.at_least_18 === "yes" &&
             $scope.formData.us_citizen === "yes"
            ) {
            $scope.$state.go("form.consent");
        } else {
            $scope.$state.go("ineligible");    
        }
    };
    
    
    // function to process the form
    $scope.checkComprehension = function() {
        if ($scope.formData.comprehension_1 === "correct" &&
            $scope.formData.comprehension_2 === "correct" &&
             $scope.formData.comprehension_3 === "correct" &&
             $scope.formData.comprehension_4 === "correct" &&
             $scope.formData.comprehension_5 === "correct"
            ) {
            $scope.$state.go("form.joinstudy");
        } else {
            $scope.$state.go("nocomprende");    
        }
    };
    
    
    
    
    
});



