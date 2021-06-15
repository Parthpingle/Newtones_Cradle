class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic :false,
            resitution :0.5,
            density :1.2,
            friction :0
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);
    }

    display(){
        push()
			translate(this.body.position.x, this.body.position.y);
            ellipseMode(CENTER);
            fill("purple");
            ellipse(0,0,this.radius,this.radius)
			pop()
    }
}