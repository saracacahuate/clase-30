class ground {
    constructor(x,y,width,height)//el constructor recibe los parametros x, Y weight y height
    {
        var options={isStatic:true} //que el onjeto se quede statico o fijo
        this.body = Bodies.rectangle(x,y,width,height,options); //crea un cuerpo tipo rectangulo con los parametros de X,Y,weight, height y options
        this.width = width;//especifica el ancho del cuerpo
        this.height = height;//especific el alto
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");//colorea el cuerpo 
    strokeWeight(3);//es el borde del cuerpo
    rect(pos.x, pos.y, this.width, this.height);
    }
}