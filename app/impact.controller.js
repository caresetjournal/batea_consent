(function() {
    'use strict';

    angular.module('formApp')
    .controller('impactController', impactController);

    impactController.$inject = ['$state'];

    function impactController($state) {
        var vm = this;

        vm.handleNext = handleNext;

        function handleNext() {
            $state.go('form.risks')
        }
    }
})();