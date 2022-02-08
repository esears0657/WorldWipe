/*Counter:

var x = 0; 

function draw(){
    console.log(x++);
}
//Creates a variabe that is added every frame and puts it in console.log
*/

/*PuckSide:

var x = 20;

function setup(){
    createCanvas(400,300);
}

function draw(){
    background(20);

    //Creates canvas and makes background blackish

if(mouseX>200){
    fill("red");
    circle(mouseX,mouseY,x);
}else{
    fill("blue");
    circle(mouseX,mouseY,x);
    }
}
//if mouseX is more than 200 the circle is red, if not its blue
*/

//World Wrap:

var c;
var r = 35;

function setup(){
    createCanvas(800,600);
    c = 0;
    fill(255, 255, 0);
}

//Declared my variables, created the canvas, and gave values to my variables

function draw(){
    background(40);
    circle(c, 300, r)
    c = (c + 5)%width;
}

//Background is blackish, gives circle its radius and diamete and color and draws it + 5 every frame.
