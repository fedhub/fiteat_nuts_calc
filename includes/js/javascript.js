$(document).ready(function(){

    var url = 'https://www.best-biss.com/';
    $.ajax({
        url: url,
        method: 'GET',
        success: function(res){
            console.log(res);
        },
        fail: function(res){
            console.log(res);
        }
    }).done(function(res){
        console.log(res);
    });

    //// Using XMLHttpRequest
    //var xhr = new XMLHttpRequest();
    //xhr.open("GET", 'http://ndb.nal.usda.gov/ndb/foods/show/9?fg=&man=&lfacet=&count=&max=35&sort=&qlookup=01009&offset=&format=Full&new=&measureby=', true);
    //xhr.setRequestHeader("http://fiteat-nuts.herokuapp.com/", "some value");
    //xhr.onload = function () {
    //    console.log(xhr.responseText);
    //};
    //xhr.send();

    //var data = "";
    //url = "http://www.example.com/page.html"
    //var xhr = new XMLHttpRequest();
    //xhr.open("GET", url, true);
    //xhr.onreadystatechange = function() {
    //    if (xhr.readyState == 4){
    //        data = xhr.responseText
    //    }
    //}
    //xhr.send();
    //
    //function process(){
    //    url = "http://www.example.com/page.html"
    //    var xhr = new XMLHttpRequest();
    //    xhr.open("GET", url, true);
    //    xhr.onreadystatechange = function() {
    //        if (xhr.readyState == 4){
    //            alert(xhr.responseText)
    //        }
    //    }
    //    xhr.send();
    //}
});