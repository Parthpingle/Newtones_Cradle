class Rope{
    constructor(bodyA,bodyB,offSetX,offSetY) {
        var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          pointB: {x: offSetX,y: offSetY}
        };
        this.offSetX = offSetX;
        this.offSetY = offSetY;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
      }
    
      display() {
          push();
    
          stroke(48, 22, 8);
          strokeWeight(3);
          var pointA = this.rope.bodyA.position;
          var pointB = this.rope.bodyB.position;
          var ankor1X = pointA.x;
          var ankor1Y = pointA.y;
          var ankor2X = pointB.x+this.offSetX;
          var ankor2Y = pointB.y+this.offSetY;
          line(ankor1X,ankor1Y,ankor2X,ankor2Y);
          pop();
        }
    }