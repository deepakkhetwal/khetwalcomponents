/**
 * Created by dkhetwal on 1/7/2016.
 */
angular
    .module('shared.component',[])
    .directive('loanLookup', jokesMain);
jokesMain.$inject = ['jokesMainService'];

function jokesMain(jokesMainService){
    var directive = {
        restrict: 'E',
        templateUrl:'jokes-list.html',
        controller: JokesListController,
        controllerAs: 'vm'
    };
    return directive;
}

function JokesListController(){
    var vm = this;
    vm.dataLoaded = false;
    vm.jokesList = [];
    loadJokes();
    function loadJokes(){
        vm.dataLoaded = false;
        jokesMainService.getJokeList
            .query(function(data){
                vm.jokesList = data;
                vm.dataLoaded = true;
            });
    }
}