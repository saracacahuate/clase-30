const Engine = Matter.Engine;//crea una constante para la biblioteca del motor 
const World= Matter.World;//crea una constante para la bibloteca del mundo
const Bodies = Matter.Bodies;//crea una constante para la biblioteca de los cuerpos
const Constraint = Matter.Constraint;//crea una constante para la biblioteca de los cuerpos restringidos


var engine, world;
var box1;
var box2,box3,box4,box5;

var ground1,backgrounImage;
var pig1,pig2,pig3;
var log1,log2,log3,log4;

var bird1;
var bird2;

var platform;
var SlingShot1;

var constraiedLog;

function preload(){
    backgroundImage = loadImage ("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();//crea el motor
    world = engine.world;//crea el mundo
    ground1 = new ground(600,height,1200,20);

    box1 = new box(700,320,70,70);//estamos creando un objeto de la clase box
    box2 = new box(920,320,70,70);
    pig1 = new pig (810,350);
    log1 = new log(810,260,300,PI/2);//es equivalencia en 360 es igual a PI/2

    box3 = new box(700,240,70,70);
    box4 = new box(920,240,70,70);
    pig2 = new pig(810,220);
    log2 = new log(810,180,300,PI/2)
    box5 = new box(810,160,70,70)
    log3 = new log(760,120,160,PI/7)
    log4 = new log(870,120,160,-PI/7)
    

    //bird1 = new bird(500,50)
    //console.log("posicion del ave:"+ bird1.x)
    bird2 = new bird(200,50)
    
    
    SlingShot1 = new SlingShot(bird2.body,{x:50, y:100})
    plataform = new ground(80,390,200,250); 
    
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);//actualiza el movimiento de los cuerpos de manera constante
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    //bird1.display();
    bird2.display();
    plataform.display();
    SlingShot1.display();
    
   
}



function mouseDragged(){ //para que arrastes con el mouse al pajaro
   Matter.Body.setPosition(bird1.body,{x: mouseX, y: mouseY})
}
function mouseReleased(){//para que se soltara el ave
 SlingShot1.fly();

}
