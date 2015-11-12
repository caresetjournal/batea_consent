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
        vm.isCaregiver       = isCaregiver;
        vm.isMedStudent      = isMedStudent;
        vm.oldestYear        = vm.currentYear - 100,
        vm.retryQuiz         = retryQuiz;
        vm.showIllnesses     = showIllnesses;
        vm.showNPI           = showNPI;
        vm.showStepOne       = showStepOne;
        vm.showStepTwo       = showStepTwo;
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

        function isCaregiver() {
            return vm.form.formData.clinincalCareReceiving === "caregiver";
        }

        function isMedStudent() {
            return (
                vm.form.formData.clinicalCareInvolved === "firstYearStudent" ||
                vm.form.formData.clinicalCareInvolved === "secondYearStudent" ||
                vm.form.formData.clinicalCareInvolved === "thirdYearStudent" ||
                vm.form.formData.clinicalCareInvolved === "fourthYearStudent"
            );
        }

        function retryQuiz() {
            vm.showConsentForm = vm.quizFail = false;
            vm.showQuiz = true;
        }

        function showIllnesses() {
            return (vm.form.formData.clinincalCareReceiving === "patient"
                || vm.form.formData.clinincalCareReceiving === "caregiver");
        }

        function showNPI() {
            return (vm.form.formData.clinicalCareInvolved === "practicingPhysician"
                || vm.form.formData.clinicalCareInvolved === "midlevelProvider"
                || vm.form.formData.clinicalCareInvolved === "resident");
        }

        function showStepOne() {
            return (vm.form.formData.clinicalCareInvolved === "thirdYearStudent"
                || vm.form.formData.clinicalCareInvolved === "fourthYearStudent"
                || vm.form.formData.clinicalCareInvolved === "resident");
        }

        function showStepTwo() {
            return (vm.form.formData.clinicalCareInvolved === "practicingPhysician"
                || vm.form.formData.clinicalCareInvolved === "resident");
        }

        function submitConsentForm() {
		vm.form.formData.is_consented = true;
            formFactory.submitForm(CONFIG.postUrl, vm.form.formData)
            .then(function(response) {
                vm.showConsentForm = false;
                vm.formSuccess = true;
            })
            .catch(function(response) {
                console.log(response);
            });
        }
    }
})();
