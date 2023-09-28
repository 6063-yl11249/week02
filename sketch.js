let eyeWidth = 100;
let faceWidth = 300;

function setup() {
createCanvas(600, 600);
background("pink");
}



function draw() {
    noStroke()
    fill ('white')
    ellipse(200,80,130,80)
    fill("pink")
    ellipse(200,80,100,55)
    fill(150,45,35)
    noStroke()
    ellipse(200, 200, 200, 150)
    rect(100, 200, 200, 300,0,0,15,15)
    fill("white")
    ellipse(200,130,100,50)
    ellipse(200,100,100,50)
    rect(150,100,100,30)
    ellipse(225,300,10,10)
    ellipse(180,300,10,10)
    strokeWeight(5)
    stroke("white")
    noFill()
    bezier(190, 320, 195, 330, 210, 330, 215, 320)

    //Draw the califlower
    let eDiam = 170
    noStroke()
    fill (255, 237, 179)
    ellipse (360,380, eDiam,eDiam)
    ellipse (420,380, eDiam,eDiam)
    ellipse (340,420, eDiam,eDiam)
    ellipse (440,420, eDiam,eDiam)
    ellipse (360,455, eDiam,eDiam)
    ellipse (420,455, eDiam,eDiam)


    
}
