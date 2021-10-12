canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseevent = "empty";
var lastx;
var lasty;
color = "red";
width = 1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseevent = "mousedown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {

    mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {

    mouseevent = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("last positions -");
        console.log(lastx, lasty);
        ctx.moveTo(lastx, lasty);
        console.log("current positions -");
        console.log(currentx, currenty);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
    }
lastx=currentx;
lasty=currenty;

}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}