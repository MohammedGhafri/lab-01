'use strict';
var a=$(document).innerWidth();
console.log(a);
if(a<767){
$("#h2").text("mobile");
$("#p1").text("480px - 767px");
}else{
    $("#h2").text("desktop:");
    $("#p1").css("margin-left", "61px");
    $("#p1").text("768px - 960px");
    $(".a").css("background-image",'url("https://via.placeholder.com/680x75/0000FF")');
    
}