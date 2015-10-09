(function() {
    'use strict';

    angular.module('formApp')
    .controller('consentController', consentController);

    consentController.$inject = ['$state'];

    function consentController($state) {
        var vm = this;

        vm.checkQuiz = checkQuiz;

        function checkQuiz() {

        }
    }
})();