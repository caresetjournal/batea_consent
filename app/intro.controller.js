(function() {
    'use strict';

    angular.module('formApp')
    .controller('introController', introController);

    introController.$inject = ['$scope', '$state'];

    function introController($scope, $state) {
        var vm = this;

        vm.begin            = true;
        vm.beginProcess     = beginProcess;
        vm.checkEligibility = checkEligibility;
        vm.form             = $scope.$parent.formCtrl
        vm.formFalse        = false;
        vm.formTrue         = true;

        function beginProcess() {
            vm.begin = false;
            vm.showEligibility = true;
        }

        function checkEligibility() {
            if (vm.form.formData.atLeast18 && vm.form.formData.english) {
                $state.go('form.process');
            } else {
                vm.showEligibility = false;
                vm.showNotEligible = true;
            }
        }
    }
})();