$(document).ready(function(){

    var url = 'http://ndb.nal.usda.gov/ndb/foods/show/9?fg=&man=&lfacet=&count=&max=35&sort=&qlookup=01009&offset=&format=Full&new=&measureby=';
    $.ajax({
        url: url,
        method: 'GET',
        success: function(res){
            console.log(res);
        },
        fail: function(res){
            console.log(res);
        }
    });

    //// Using XMLHttpRequest
    //var xhr = new XMLHttpRequest();
    //xhr.open("GET", 'http://ndb.nal.usda.gov/ndb/foods/show/9?fg=&man=&lfacet=&count=&max=35&sort=&qlookup=01009&offset=&format=Full&new=&measureby=', true);
    ////xhr.setRequestHeader("http://localhost:3000", "some value");
    //xhr.onload = function () {
    //    console.log(xhr.responseText);
    //};
    //xhr.send();
});