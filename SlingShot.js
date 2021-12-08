class SlingShot{
    constructor(bodyA,pointB){ //son los parametros del cuerpoA y el puntoB(que esta fijo)
        var options = {
            bodyA: bodyA,
            pointB: pointB,//el cuerpo B va estar conectado con el A por medio de la cadena
            stiffness: 0.08,//rigidez que va tener la liga 
            length: 10//es el largo de la liga 
        }
         this.SlingImage1 = loadImage("sprites/sling1.png")
         this.SlingImage2 = loadImage("sprites/sling2.png")
         this.SlingImage3 = loadImage("sprites/sling3.png")
        this.pointB = pointB;
         this.Sling = Constraint.create(options);//se crea la cadena para el cuerpo restringido
         World.add(world,this.Sling);
    }
     fly(){ //para que se suelte el ave 
         this.Sling.bodyA = null;
     }
    display(){
        image(this.SlingImage1, 150,70)
        image(this.SlingImage2, 120,70)
        if(this.Sling.bodyA){ //la liga de la resortera tiene agarrado al ave 
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3)// es el grosor de la liga 
        line(pointA.x-90, pointA.y, pointB.x-30, pointB.y)
        line(pointA.x-90, pointA.y, pointB.x-70, pointB.y-3)
        image(this.SlingImage3, pointA.x-100, pointA.y-10, 15, 30)
        pop();
        }
        //se dibuja la linea entre bird1 y constraiedLog
    }
}