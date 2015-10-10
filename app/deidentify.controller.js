(function() {
    'use strict';

    angular.module('formApp')
    .controller('deidentifyController', deidentifyController);

    deidentifyController.$inject = ['$state'];

    function deidentifyController($state) {
        var vm = this;

        vm.handleNext = handleNext;

        function handleNext() {
            $state.go('form.data')
        }
    }
})();