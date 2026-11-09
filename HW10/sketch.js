function setup() {
    createCanvas(800, 600);
}
//sets y for snow
let y = -10;
//draws everything
function draw() {
    background(70,120,180);
    drawScene() 
    snowFall()
    bird()

    //text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);
}

//draws scene
function drawScene() {
    noStroke()

    //mountains
    fill(114,128,150)
    triangle(450,320,574,372,343,385)
    fill(130,142,161)
    triangle(233,350,337,383,107,401)
    fill(147,162,186)
    triangle(53,321,213,404,-80,421)
    fill(157,177,209)
    triangle(338,325,475,397,202,404)
    fill(147,163,189)
    triangle(575,344,728,377,489,377)

    //ground
    fill(230)
    quad(0,400,800,350,800,600,0,600)
    fill(176,203,245)
    circle(800,700,400)
    fill(165,183,212)
    circle(0,800,500)
}

//draws snow
function snowFall(){
    //adds to snow y, making animation
    y += 5;

    fill(250)
//shapes for snow
    circle(50,y-109,10)
    circle(500,y-200,10)
    circle(300,y-432,10)
    circle(100,y-213,10)
    circle(234,y-349,10)
    circle(778,y-129,10)
    circle(632,y-308,10)
    circle(435,y-409,10)
    circle(702,y-239,10)

    //resets snow once below sketch
    if (y > 1400) {
        y = -10
    }

}

function bird(){
    push();
    translate(mouseX,mouseY);
    fill("red");
    circle(0,0,22);
    fill(230,220,100);
    triangle(5,5,10,10,15,15);
    pop();

    
}