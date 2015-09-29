
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
            controller: 'formController as formCtrl'
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



        .state('form.finalize', {
            url: '/finalize',
            templateUrl: 'form-finalize.html'
        })


        .state('form.ifdoctor', {
            url: '/ifdoctor',
            templateUrl: 'form-ifdoctor.html'
        })


        .state('form.ifmedstudent', {
            url: '/ifmedstudent',
            templateUrl: 'form-ifmedstudent.html'
        })


        .state('form.ifresident', {
            url: '/ifresident',
            templateUrl: 'form-ifresident.html'
        })

        .state('form.ifpatientcaregiver', {
            url: '/ifpatientcaregiver',
            templateUrl: 'form-ifpatientcaregiver.html'
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



        // url will be /consent
        .state('form.consent', {
            url: '/consent',
            templateUrl: 'consent.html'
        });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/about');
});