/**
 * Created by dkhetwal on 1/7/2016.
 */
(function(){
    'use strict';
    angular
        .module('jokes.main.service',['ngResource'])
        .factory('jokesMainService', jokesMainService);
    jokesMainService.$inject = ['$resource'];
    function jokesMainService($resource){
        return {
            getJokeList : $resource('jokes.json', {}, {query: {method:'GET'}})
        };
    }
})();
