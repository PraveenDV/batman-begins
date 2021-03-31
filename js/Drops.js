class Drops{
    constructor(x,y){
        var options={
            isStatic:false,
            'friction':0.5,
            'restitution':0.2
        }

        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,1500), y:random(0,400)});
        }
    }
    
}