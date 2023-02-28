let movers = [];
let mu = 0.1;
let dragC = 0.2;

let mover;
let attractor;

function setup() {
    createCanvas(900, 900);
    mover = new Mover(200, 200, 15);
    attractor = new Attractor(400, 400, 30);
}

function draw() {
    background(0, 5);

    mover.update();
    mover.show();

    attractor.attract(mover);
    attractor.show();
}

/* Use this for Friction and Drag
for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), 0, random(1, 8));
}

// To simulate drag
fill(255, 125);
noStroke();
rect(0, height / 2, width, height / 2);

for (let mover of movers) {
    if (mouseIsPressed) {
        let wind = createVector(0.1, 0);
        mover.applyForce(wind);
    }

    let gravity = createVector(0, 0.2);
    let weigth = p5.Vector.mult(gravity, mover.mass);   
    mover.applyForce(weigth);
    mover.friction();
    if (mover.pos.y > height / 2) {
        mover.drag(dragC);
    }
}

mover.edges();

*/