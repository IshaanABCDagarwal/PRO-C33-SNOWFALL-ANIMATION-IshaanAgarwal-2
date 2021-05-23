class Snow {
    constructor(x,y,r) {
        var options = {
            'restitution':0.9,
            'density':20,
            'friction':1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("snow4.webp")
        this.body = Bodies.circle( this.x, this.y,(this.r)/2, options);
        World.add(world, this.body);
        
    }

    display() {

         var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        rectMode(CENTER);
        imageMode(CENTER)
        image(this.image, 0, 0, this.r, this.r)
        pop();

    }


}