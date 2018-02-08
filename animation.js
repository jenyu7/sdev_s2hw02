/*
 * Jen Yu 
 * SoftDev Period 7
 * 02-07-2018
 * K#02: They lock us in the tower whenever we get caught...which is often
 */

var canvas = document.getElementById("slate");
var height = canvas.getAttribute("height");
var width = canvas.getAttribute("width");
var ctx = canvas.getContext("2d"); // set context to 2d

var animate = document.getElementById("animate");
var stop = document.getElementById("stop");

console.log(animate);
console.log(stop);

//initialized radius
var r = 5;
//growing?
var grow = true;
//animation id
var id = 0;

//updates grow bool depending on radius
var update = function(r){
    if(r < 5 || r >= 400)
	grow = !grow;
};

//draws a dot and increases/decreases radius
var drawDot = function(){
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.clearRect(0, 0, 600, 600);
    ctx.arc(300, 300, r, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    update(r)
    if(grow)
	r ++;
    else
	r --;
    id = window.requestAnimationFrame(drawDot);
};

//stops the animation (id known through global var)
var stopA = function(){
    window.cancelAnimationFrame(id);
};

//add the event listeners
animate.addEventListener("click", drawDot);
stop.addEventListener("click", stopA);
