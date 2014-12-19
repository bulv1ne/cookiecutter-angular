'use strict';

angular.module('{{ cookiecutter.repo_name }}.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    // Default, if nothing matches go here.
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('workarea', {
        url: '/workarea/:workareaId',
        templateUrl: 'js/shared/workareaView.html',
        controller: 'workareaCtrl',
    })
    .state('newWorkarea', {
        url: '/',
        controller: function($state) {
            $state.go('workarea', {
                workareaId: 'start'
            });
        },
    });
});
