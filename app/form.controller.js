(function() {
    'use strict';

    angular.module('formApp')
    // our controller for the form
    // =================================================
    .controller('formController', formController);

    formController.$inject = ['$scope', '$state', '$stateParams', 'formFactory']

    function formController($scope, $state, $stateParams, formFactory) {
        var vm = this;

        vm.checkComprehension   = checkComprehension;
        vm.checkEligibility     = checkEligibility;
        vm.checkParticipantType = checkParticipantType;
        vm.handleNext           = handleNext;
        vm.formData             = undefined;
        vm.isActive             = isActive;
        vm.processForm          = processForm;

        activate();

        function activate() {
            // Create a randowm number
            var random = Math.floor((Math.random() * 9000000000) + 1000000000);
            // we will store all of our form data in this object

            vm.formData = {"random_id": random};

            console.log(vm.formData);
        }

        $scope.$watch(function() {
            return vm.formData;
        }, function(newVal, oldVal) {
            console.log(newVal);
        }, true)

        function checkComprehension() {
            if (vm.formData.comprehension_1 === "correct" &&
                vm.formData.comprehension_2 === "correct" &&
                 vm.formData.comprehension_3 === "correct" &&
                 vm.formData.comprehension_4 === "correct" &&
                 vm.formData.comprehension_5 === "correct"
                ) {
                $state.go("form.joinstudy");
            } else {
                $state.go("nocomprende");
            }
        }

        function checkEligibility() {
            if (// vm.formData.english_comfort === "yes" &&
                vm.formData.at_least_13 === "yes" //&&
                 // vm.formData.us_citizen === "yes"
                ) {
                $state.go("form.consent");
            } else {
                $state.go("ineligible");
            }
        }

        function checkParticipantType() {
            if (vm.formData.participant_type === "doctor"){
                $state.go("form.ifdoctor")
            } else if (vm.formData.participant_type === "resident"){
                $state.go("form.ifresident");
            } else if (vm.formData.participant_type === "patient-caregiver"){
                $state.go("form.ifpatientcaregiver");
            }else if (vm.formData.participant_type === "medical_student"){
                $state.go("form.ifmedstudent");
            } else {
                $state.go("form.joinstudy");
            }
        }

        function handleNext() {
            if ($state.current === 'form.deidentify') {
                $state.go('form.data');
            }
        }

        function isActive(linkState) {
            if (linkState === $state.current.name) {
                return 'active-link';
            } else {
                return '';
            }
        }

        // function to process the form
        function processForm() {
            console.log(vm.formData);
            // alert('POST form contents to webservice');
            formFactory.submitForm('https://registry.npi.io/write/api/consent-form', vm.formData)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(response) {
                console.warn(response.message);
            });
        }
    }
})();