let movers = [];
let mu = 0.1

function setup() {
    createCanvas(800, 800);
    for (let i = 0; i < 10; i++) {
        movers[i] = new Mover(random(width), random(height), random(1, 8));
    }
}

function draw() {
    background(0);
    for (let mover of movers) {
        if (mouseIsPressed) {
            let wind = createVector(0.1, 0);
            mover.applyForce(wind);
        }

        let gravity = createVector(0, 0.2);
        let weigth = p5.Vector.mult(gravity, mover.mass);   
        mover.applyForce(weigth);
        mover.friction();
        
        mover.update();
        mover.edges();
        mover.show();
    }
}