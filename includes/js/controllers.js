var app = angular.module('myapp.controllers', []);
var base_url = 'http://localhost:3000';

app.controller('main', ['$scope', function($scope){

    var url, rest_id, menu_type_id, food_item_id;
    $scope.rest_selected = function(){
        rest_id = $('#rests select').val();
        get_menu_types();
    };

    $scope.menu_type_selected = function(){
        menu_type_id = $('#menu-types select').val();
        get_food_items();
    };

    $scope.food_item_selected = function(){
        food_item_id = $('#food-items select').val();
        get_addition_sets();
    };

    function get_menu_types(){
        url = base_url + '/get-menu-types&rest_id='+rest_id;
        $.ajax({
            url: url,
            method: 'POST'
        }).done(function(res){
            $scope.menu_types = res;
            $scope.$apply();
            $('#menu-types').toggle();
        });
    }

    function get_food_items(){
        url = base_url + '/get-food-items&rest_id='+rest_id+'&menu_type_id='+menu_type_id;
        $.ajax({
            url: url,
            method: 'POST'
        }).done(function(res){
            $scope.food_items = res;
            $scope.$apply();
            $('#food-items').toggle();
        });
    }

    function get_addition_sets(){
        url = base_url + '/get-addition-sets&rest_id='+rest_id+'&menu_type_id='+menu_type_id+'&food_item_id='+food_item_id;
        $.ajax({
            url: url,
            method: 'POST'
        }).done(function(res){
            console.log(res);
            $scope.sets = res;
            $scope.$apply();
        });
    }

}]);