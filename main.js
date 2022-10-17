var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas = document.getElementById("myCanvas");
color = document.getElementById("color").value;

ctx= canvas.getContext("2d");

var mouseEvent="";
var lastpositionofx,lastpositionofy;
var lastpositionoftouchx, lastpositionoftouchy;
Widthofline=document.getElementById("width_of_line").value;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    Widthofline=document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.stokeStyle = color;
        ctx.lineWidth = Widthofline;

        console.log("Last position of x and y coordinates = ")
        console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
        ctx.moveTo(lastpositionofx, lastpositionofy);

        console.log("Current position of x and y coordinates =");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    lastpositionofx = current_position_of_mouse_x;
    lastpositionofy = current_position_of_mouse_y;

}
canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e)
{
    console.log("my_touchstart");
    color = document.getElementById("color").value;
    Widthofline=document.getElementById("width_of_line").value;
    lastpositionoftouchx = e.touches[0].clientX - canvas.offsetLeft;
    lastpositionoftouchy = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e)
{

    currentpositionoftouchx = e.touches[0].clientX - canvas.offsetLeft;
    currentpositionoftouchy = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.stokeStyle = color;
    ctx.lineWidth = Widthofline;

    console.log("Last position of x and y coordinates = ")
    console.log("x = " + lastpositionoftouchx + "y = " + lastpositionoftouchy);
    ctx.moveTo(lastpositionoftouchx, lastpositionoftouchy);

    console.log("Current position of x and y coordinates =");
    console.log("x = " + currentpositionoftouchx + "y = " + currentpositionoftouchy);
    ctx.lineTo(currentpositionoftouchx, currentpositionoftouchy);
    ctx.stroke();

    lastpositionoftouchx = currentpositionoftouchx;
    lastpositionoftouchy = currentpositionoftouchy;
}
function ClearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}