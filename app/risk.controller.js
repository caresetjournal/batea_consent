(function() {
    'use strict';

    angular.module('formApp')
    .controller('riskController', riskController);

    riskController.$inject = ['$state'];

    function riskController($state) {
        var vm = this;

        vm.handleNext = handleNext;
        vm.pageIndex  = 1;

        function handleNext() {
            console.log(vm.pageIndex);
            if (vm.pageIndex < 3) {
                vm.pageIndex++;
            } else {
                $state.go('withdrawal');
            }
        }
    }
})();