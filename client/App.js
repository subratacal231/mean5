/**
 * @author subrata
 */

var configApp = angular.module('configApp', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.grouping', 'ui.grid.autoResize', 'ui.grid.pagination']);
var chartApp = angular.module('chartApp',['nvd3']);
var mainApp = angular.module('mainApp', ['ui.router', 'ngDialog', 'configApp', 'chartApp']);

mainApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/mainView');

	$stateProvider
    .state('mainView',{
        url: '/mainView',
        views: {
            'TopItem': {
                templateUrl: './Modules/Grid/view/GridView.html',
                controller: 'ConfigController'
            },
            'BottomItem': {
                templateUrl: './Modules/Chart/view/ChartView.html',
                controller: 'ChartController'
            }
        }
    });
});



