(function() {
    'use strict';

    angular.module('formApp')
    .controller('consentController', consentController);

    consentController.$inject = ['$scope', '$state', 'formFactory'];

    function consentController($scope, $state, formFactory) {
        var vm = this;

        vm.checkQuiz         = checkQuiz;
        vm.currentYear       = parseInt(2015, 10) || new Date().getFullYear(),
        vm.form              = $scope.$parent.formCtrl;
        vm.oldestYear        = vm.currentYear - 100,
        vm.retryQuiz         = retryQuiz;
        vm.showQuiz          = true;
        vm.submitConsentForm = submitConsentForm;
        vm.quizFail          = false;
        vm.years             = [];

        activate();

        function activate() {
            for (var i = vm.currentYear; i >= vm.oldestYear; i--) {
              vm.years.push(i);
            }
        }

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
            } else {
                vm.showQuiz = false;
                vm.quizFail = true;
            }
        }

        function retryQuiz() {
            vm.showConsentForm = vm.quizFail = false;
            vm.showQuiz = true;
        }

        function submitConsentForm() {
            formFactory.submitForm(vm.form.formData)
            .then(function(response) {
                vm.showConsentForm = false;
                vm.formSuccess = true;
                console.log(response)
            })
            .catch(function(response) {
                console.log(response);
            });
        }
    }
})();