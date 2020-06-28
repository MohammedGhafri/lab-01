'use strict';
var a=$(document).innerWidth();// to get the width of the screen
var boxes=['a','b','c','d','e','f','g','h','i'];
// console.log(a);
if(a<767){// this for the moblie view
$("#h2").text("mobile");
$("#p1").text("480px - 767px");
boxes.forEach((item,idx)=>{
    let b=Math.floor(Math.random()*900000) + 100000;
    console.log(b);
    let c=`url("https://via.placeholder.com/1/${b}")`;

$(`.${item}`).css("background-image",c);})
}else {// for the desktop view
    console.log("got you");
    $("#h2").text("desktop:");
    $("#p1").css("margin-left", "61px");
    $("#p1").text("768px - 960px");
    boxes.forEach((item,idx)=>{
        let b=Math.floor(Math.random()*900000) + 100000;// to generate rendom colors number
        console.log(b);
        let c=`url("https://via.placeholder.com/1/${b}")`;
    
    $(`.${item}`).css("background-image",c);})
    
}
// else{
//     $("#h2").text("Tablet view :");
//     $("#p1").text("768px - 1024px");
// }