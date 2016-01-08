/**
 * Created by dkhetwal on 1/7/2016.
 */
(function () {
    'use strict';
    angular
        .module('shared.component', [])
        .directive('jokesMain', jokesMain);
    JokesListController.$inject = ['jokesMainService'];

    function jokesMain() {
        var directive = {
            restrict: 'E',
            templateUrl: 'jokes-list.html',
            controller: JokesListController,
            controllerAs: 'vm'
        };
        return directive;
    }

    function JokesListController(jokesMainService) {
        var vm = this;
        vm.dataLoaded = false;
        vm.jokesList = [];
        loadJokes();
        function loadJokes() {
            vm.dataLoaded = false;
            jokesMainService.getJokeList
                .query(function (data) {
                    vm.jokesList = data;
                    vm.dataLoaded = true;
                });
        }
    }
})();