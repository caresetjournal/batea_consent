(function() {
    'use strict';

    angular.module('formApp')
    .controller('consentController', consentController);

    consentController.$inject = ['$state'];

    function consentController($state) {
        var vm = this;

        vm.checkQuiz = checkQuiz;
        vm.showQuiz  = true;

        function checkQuiz() {
            var correctCount = 0;
            if (parseInt(vm.browserHistory) === 2) {
                correctCount++;
            }

            if (parseInt(vm.browserPatterns) === 1) {
                correctCount++;
            }

            if (parseInt(vm.identity) === 1) {
                correctCount++;
            }

            if (parseInt(vm.happen) === 2) {
                correctCount++;
            }

            if (parseInt(vm.session) === 1) {
                correctCount++;
            }

            if (parseInt(vm.survey) === 1) {
                correctCount++;
            }

            if (parseInt(vm.withdraw) === 2) {
                correctCount++;
            }

            if (correctCount >= 4) {
                vm.showQuiz = false;
                vm.showConsentForm = true;
            }
        }
    }
})();