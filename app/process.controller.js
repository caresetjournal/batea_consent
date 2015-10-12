(function() {
    'use strict';

    angular.module('formApp')
    .controller('processController', processController);

    processController.$inject = ['$state'];

    function processController($state) {
        var vm = this;

        vm.handleNext = handleNext;
        vm.pageIndex  = 1;

        function handleNext() {
            console.log(vm.pageIndex);
            if (vm.pageIndex < 6) {
                vm.pageIndex++;
            } else {
                $state.go('form.deidentify');
            }
        }
    }
})();