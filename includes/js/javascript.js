$(document).ready(function(){

    var url = 'http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=Y0CJbZQ6ftSRQEfHMaYGIrdbWUZhidWF5Ehag3Yy&nutrients=208&ndbno=01009';
    $.ajax({
        url: url,
        crossOrigin: true,
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
    //xhr.open("GET", 'http://www.ndb.nal.usda.gov/ndb/foods/show/9?fg=&man=&lfacet=&count=&max=35&sort=&qlookup=01009&offset=&format=Full&new=&measureby=', true);
    //xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    //xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");
    //xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
    //xhr.setRequestHeader("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
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