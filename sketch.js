let eyeWidth = 100;
let faceWidth = 300;

function setup() {
createCanvas(600, 600);
background("pink");
}



function draw() {
    ellipse(200,80,130,80)
    fill("pink")
    ellipse(200,80,100,50)
    fill(150,45,35)
    noStroke()
    ellipse(200, 200, 200, 150)
    rect(100, 200, 200, 300)
    fill("white")
    ellipse(200,130,100,50)
    ellipse(200,100,100,50)
    rect(150,100,100,30)
    ellipse(225,300,10,10)
    ellipse(180,300,10,10)
    strokeWeight(5)
    stroke("white")
    noFill()
    bezier(190, 330, 195, 340, 210, 340, 215, 330)
    
}
