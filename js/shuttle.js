class Shuttle {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 1,
            density: 0.8
        };
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image = loadImage("assets/shuttle.png");

        World.add(world, this.body);
    }

    display() {
        ellipseMode(CENTER)
        var pos = this.body.position

        //ellipse(pos.x, pos.y, this.r, this.r)
        image(this.image, pos.x, pos.y, 50, 50);
    }
}