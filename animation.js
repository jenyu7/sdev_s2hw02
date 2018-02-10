/*
 * Jen Yu 
 * SoftDev Period 7
 * 02-07-2018
 * K #03: What is it saving the screen from?
 */

var canvas = document.getElementById("slate");
var height = canvas.getAttribute("height");
var width = canvas.getAttribute("width");
var ctx = canvas.getContext("2d"); // set context to 2d

var animate = document.getElementById("animate");
var dvd_a = document.getElementById("dvd");
var stop = document.getElementById("stop");

console.log(animate);
console.log(dvd_a);
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
    stopA();
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

var dvd = new Image();
dvd.src = "dvd.png";

var dvdBounce = function(){
    stopA();
    //initializing
    var x = Math.random() * (canvas.width - dvd.width);
    var y = Math.random() * (canvas.height - dvd.height);
    var dx = 3 * Math.random() + 0.1;
    var dy = 3 * Math.random() + 0.1;
    var bounce = function(){
	ctx.clearRect(0, 0, 600, 600);
	if (x < 0 || x > canvas.width - dvd.width)
	    dx *= -1;
	if (y < 0 || y > canvas.height - dvd.height)
	    dy *= -1;
	ctx.drawImage(dvd, x+dx, y+dy);
	x += dx;
	y += dy;
	id = window.requestAnimationFrame(bounce);
    };
    bounce();
}

//stops the animation (id known through global var)
var stopA = function(){
    window.cancelAnimationFrame(id);
};

//add the event listeners
animate.addEventListener("click", drawDot);
dvd_a.addEventListener("click", dvdBounce);
stop.addEventListener("click", stopA);
