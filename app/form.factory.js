(function() {
    'use strict';

    angular.module('formApp')
    .factory('formFactory', formFactory);

    formFactory.$inject = ['$http', '$q'];

    function formFactory($http, $q) {
        var factory = {
            submitForm: submitForm
        };

        return factory;

        function submitForm(url, formData) {
            var req = {
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: formData
            }
            var postPromise = $q.defer();

            $http(req)
            .then(function(response) {
                postPromise.resolve(response.data);
            })
            .catch(function(response) {
                postPromise.reject(response.data);
            });

            return postPromise.promise;
        }
    }
})();