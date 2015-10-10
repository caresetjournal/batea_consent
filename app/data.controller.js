(function() {
    'use strict';

    angular.module('formApp')
    .controller('dataController', dataController);

    dataController.$inject = ['$state'];

    function dataController($state) {
        var vm = this;

        vm.handleNext = handleNext;

        function handleNext() {
            $state.go('form.impact')
        }
    }
})();