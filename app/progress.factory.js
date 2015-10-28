(function() {
    'use strict';

    angular.module('formApp')
    .factory('progressFactory', progressFactory);

    function progressFactory() {
        var factory = {
            states: [
                'form.intro',
                'form.process',
                'form.deidentify',
                'form.data',
                'form.impact',
                'form.risks',
                'form.withdrawal',
                'form.consent'
            ],
            checkFurthestState: checkFurthestState,
            furthestState:      0,
            isStateAvailable:   isStateAvailable,
            setFurthestState:   setFurthestState
        };

        return factory;

        function checkFurthestState(state) {
            var stateIndex = factory.states.indexOf(state);

            if (stateIndex <= factory.furthestState + 1) {
                return false;
            } else {
                return factory.states[factory.furthestState];
            }
        }

        function isStateAvailable(state) {
            return factory.states.indexOf(state) <= factory.furthestState;
        }

        function setFurthestState(state) {
            if (factory.states.indexOf(state) > factory.furthestState) {
                factory.furthestState = factory.states.indexOf(state);
            }
        }
    }
})();