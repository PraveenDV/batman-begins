class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true,
            //'friction':0.1
        }

        this.body=Bodies.circle(x,y,100,options);
        this.radius=200;

        this.image=loadImage("images/walking_1.png");

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}