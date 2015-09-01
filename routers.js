var express = require('express');
var routers = express.Router();
var mysql = require('./mysql');
var services = require('./services');

routers.get('/', function(req, res){

    var query = 'select * from fiteat_restaurant_index';
    mysql.getConnection(function(err, conn){
        if(!err){
            conn.query(query, function(err, result){
                if(!err){
                    res.render('index', {
                        rests: result
                    });
                }
                else{
                    console.log('Error retrieving restaurants list: ' + err);
                    res.send('Error retrieving restaurants list: ' + err);
                }
                conn.release();
            });
        }
        else {
            console.log('Error getting mysql connection: ' + err);
            res.send('Error getting mysql connection: ' + err);
        }
    });

});

routers.post('/get-menu-types&:rest_id', function(req, res){

    var rest_id = req.params.rest_id.split('=').pop();
    var query = 'select * from fiteat_menu_type where restaurant='+rest_id;
    mysql.getConnection(function(err, conn){
        if(!err){
            conn.query(query, function(err, result){
                if(!err){
                    res.send(result);
                }
                else{
                    console.log('Error retrieving menu types list: ' + err);
                    res.send('Error retrieving menu types list: ' + err);
                }
                conn.release();
            });
        }
        else {
            console.log('Error getting mysql connection: ' + err);
            res.send('Error getting mysql connection: ' + err);
        }
    });

});

routers.post('/get-food-items&:rest_id&:menu_type_id', function(req, res){

    var rest_id = req.params.rest_id.split('=').pop();
    var menu_type_id = req.params.menu_type_id.split('=').pop();
    var query = 'select * from fiteat_food_item where restaurant='+rest_id+' and menu_type='+menu_type_id;
    mysql.getConnection(function(err, conn){
        if(!err){
            conn.query(query, function(err, result){
                if(!err){
                    res.send(result);
                }
                else{
                    console.log('Error retrieving food items list: ' + err);
                    res.send('Error retrieving food items list: ' + err);
                }
                conn.release();
            });
        }
        else {
            console.log('Error getting mysql connection: ' + err);
            res.send('Error getting mysql connection: ' + err);
        }
    });

});

var addition_sets_arr = [];
var count = 0;

routers.post('/get-addition-sets&:rest_id&:menu_type_id&:food_item_id', function(req, res){

    var rest_id = req.params.rest_id.split('=').pop();
    var menu_type_id = req.params.menu_type_id.split('=').pop();
    var food_item_id = req.params.food_item_id.split('=').pop();
    //var query = 'select additionSet from fiteat_additionSet_components where restaurant='+rest_id+' and food_item='+food_item_id+' group by additionSet';
    var query = 'select ' +
        't1.additionSet as addition_set_id,' +
        't2.english as english ' +
        'from fiteat_additionSet_components t1 ' +
        'left join fiteat_additionSet t2 ' +
        'on t1.additionSet=t2.id ' +
        'where t1.restaurant='+rest_id+' and t1.food_item='+food_item_id+' ' +
        'group by t1.additionSet';
    mysql.getConnection(function(err, conn){
        if(!err){
            conn.query(query, function(err, addition_sets){
                if(!err){
                    addition_sets_arr = [];
                    get_components(addition_sets, rest_id, menu_type_id, food_item_id, res);
                }
                else{
                    console.log('Error retrieving addition sets list: ' + err);
                    res.send('Error retrieving addition sets list: ' + err);
                }
                conn.release();
            });
        }
        else {
            console.log('Error getting mysql connection: ' + err);
            res.send('Error getting mysql connection: ' + err);
        }
    });

});

function get_components(addition_sets, rest_id, menu_type_id, food_item_id, res){

    count = addition_sets.length;
    mysql.getConnection(function (err, conn) {
        if (!err) {
            for(var i in addition_sets){
                run_query(conn, i, res, rest_id, food_item_id, addition_sets[i]);
            }
            conn.release();
        }
        else {
            console.log('Error getting mysql connection: ' + err);
            res.send('Error getting mysql connection: ' + err);
        }
    });

}

function run_query(conn, i, res, rest_id, food_item_id, addition_set){

    var query = 'select ' +
        't1.component as component_id,' +
        't2.hebrew as hebrew,' +
        't2.english as english,' +
        't2.usda as usda ' +
        'from fiteat_additionSet_components t1 ' +
        'left join fiteat_components t2 ' +
        'on t1.component=t2.id ' +
        'where t1.restaurant=' + rest_id + ' and t1.food_item=' + food_item_id + ' and t1.additionSet=' + addition_set.addition_set_id;
    conn.query(query, function (err, components) {
        if (!err) {
            addition_set.components = components;
            addition_sets_arr.push(addition_set);
            if(i == count-1){
                res.send(addition_sets_arr);
            }
        }
        else console.log('Error retrieving addition sets list: ' + err);
    });

}

module.exports = routers;

