const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var drops=[];
var umbrella;
var thunderBolt;

var maxDrops=100;
var thunder1, thunder2,thunder3,thunder4

 



function preload(){
     thunder1=loadImage("images/1.png");
     thunder2=loadImage("images/2.png");
     thunder3=loadImage("images/3.png");
     thunder4=loadImage("images/4.png");
}

function setup(){
   createCanvas(displayWidth,displayHeight);

   engine=Engine.create();
   world=engine.world;
    
   umbrella=new Umbrella(600, 630);

  



   if(frameCount%100===0){
   for(i=0;i<maxDrops;i++){
       drops.push(new Drops(random(0,1000), random(0,400)));
   }
   }

  Engine.run(engine);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
   rand=Math.round(random(1,4));
   if(frameCount%100===0){
       thunderBolt=createSprite(Math.round(random(10, 900)), Math.round(random(90, 150)), 10, 10);
       switch(rand){
           case 1: thunderBolt.addImage(thunder1);
           break;
           case 2: thunderBolt.addImage(thunder2);
           break;
           case 3: thunderBolt.addImage(thunder3);
           break;
           case 4: thunderBolt.addImage(thunder4);
           break;
           default: break;           
       }

       thunderBolt.scale=0.3;
      

    }

    if(frameCount%13===0 && thunderBolt){
        thunderBolt.destroy();
    } 

   


   



   umbrella.display();

   
    for(var j=0;j<maxDrops;j++){
        drops[j].display();
        drops[j].update();
    }

    drawSprites();

}   



