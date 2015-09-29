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
            var postPromise = $q.defer();

            $http.post(url, formData)
            .then(function(response) {
                console.log(response);
                postPromise.resolve(response.data);
            })
            .catch(function(response) {
                postPromise.reject(response.data);
            });

            return postPromise.promise;
        }
    }
})();