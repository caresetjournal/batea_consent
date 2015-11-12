(function() {
    'use strict';

    angular.module('formApp')
    // our controller for the form
    // =================================================
    .controller('formController', formController);

    formController.$inject = ['$scope',
        '$state',
        '$stateParams',
        'formFactory',
        'progressFactory'
    ];

    function formController($scope, $state, $stateParams, formFactory, progressFactory) {
        var vm = this;

        vm.checkComprehension   = checkComprehension;
        vm.checkEligibility     = checkEligibility;
        vm.checkParticipantType = checkParticipantType;
        vm.checkState           = checkState;
        vm.handleNext           = handleNext;
        vm.formData             = undefined;
        vm.isActive             = isActive;
        vm.processForm          = processForm;

        activate();

        $scope.$on('$locationChangeStart', function(event) {
            var reroute = progressFactory.checkFurthestState($state.current.name);

            if (reroute) {
                $state.go(reroute);
            } else {
                progressFactory.setFurthestState($state.current.name);
            }
        });
        
        function merge_objects(obj1,obj2){
            var obj3 = {};
            for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
            for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
            return obj3;
        }
        
         
        function activate() {
            // Create a random number
            var random = Math.floor((Math.random() * 9000000000) + 1000000000);
            // we will store all of our form data in this object
            var queryDict = {}
            location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
            vm.formData = merge_objects({"random_id": random},queryDict);
    
        }

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

        function checkState(state) {
            if (!progressFactory.isStateAvailable(state)) {
                return 'disabled';
            } else {
                return '';
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
                if (!progressFactory.isStateAvailable(linkState)) {
                    return 'disabled';
                } else {
                    return '';
                }
            }
        }

        // function to process the form
        function processForm() {
            //console.log(vm.formData);
            vm.formData.is_consented = true; //the central result of this process...
            formFactory.submitForm(CONFIG.postUrl, vm.formData)
            .then(function(response) {
            })
            .catch(function(response) {
                console.warn(response.message);
            });
        }
    }
})();
