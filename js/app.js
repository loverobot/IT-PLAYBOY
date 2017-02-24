/**
 * Created by yuanshijie on 2017/2/24.
 */
var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{})
        .when('/about',{templateUrl:'about.html'})
        .otherwise({redirectTo:'/'});
}]);