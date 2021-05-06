var canvas  = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

rover_width = 100;
rover_height = 100;

function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
  keypressed = e.keyCode;
console.log(keypressed);

if (keypressed == '38') {
    up();
}
if (keypressed == '37') {
    Left();
}
if (keypressed == '39') {
    right();
}
if (keypressed == '40') {
    down();
}
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y-10;
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y+10;
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x+10;
        uploadBackground();
        uploadRover();
    }
}
function Left() {
    if (rover_x >= 0) {
        rover_x = rover_x-10;
        uploadBackground();
        uploadRover();
    }
}