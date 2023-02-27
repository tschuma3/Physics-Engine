let moverA;
let moverB;

function setup() {
    createCanvas(800, 800);
    moverA = new Mover(400, 400, 4)
    moverB = new Mover(200, 400, 2)
}

function draw() {
    background(0);

    if (mouseIsPressed) {
        let wind = createVector(0.1, 0);
        moverA.applyForce(wind);
        moverB.applyForce(wind);
    }

    let gravity = createVector(0, 0.2);

    let weigthA = p5.Vector.mult(gravity, moverA.mass);
    let weigthB = p5.Vector.mult(gravity, moverB.mass);    
    moverA.applyForce(weigthA);
    moverB.applyForce(weigthB);
    
    moverA.update();
    moverA.edges();
    moverA.show();

    moverB.update();
    moverB.edges();
    moverB.show();
}