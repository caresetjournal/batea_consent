(function() {
    'use strict';

    angular.module('formApp')
    .controller('withdrawController', withdrawController);

    withdrawController.$inject = ['$state'];

    function withdrawController($state) {
        var vm = this;

        vm.handleNext = handleNext;

        function handleNext() {
            $state.go('form.consent')
        }
    }
})();