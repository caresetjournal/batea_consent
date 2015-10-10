(function() {
    'use strict';

    angular.module('formApp')
    .controller('consentController', consentController);

    consentController.$inject = ['$scope', '$state'];

    function consentController($scope, $state) {
        var vm = this;

        vm.checkQuiz         = checkQuiz;
        vm.currentYear       = parseInt(2015, 10) || new Date().getFullYear(),
        vm.form              = $scope.$parent.formCtrl;
        vm.oldestYear        = vm.currentYear - 100,
        vm.showQuiz          = true;
        vm.submitConsentForm = submitConsentForm;
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
            }
        }

        function submitConsentForm() {

        }
    }
})();