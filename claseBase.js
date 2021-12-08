class claseBase {
    constructor(x,y,width,height,angle)
    {
        var options = {restitution: 0.7,friction: 0.01,density: 0.01}
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png")
        World.add(world,this.body)
    }
    
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push(); //actualizando las posiciones en el x,y y el angulo del objeto
       translate(pos.x,pos.y);//generas la traslacion del objeto
       rotate(angle);//generas la rotacion del objeto
       imageMode(CENTER);//la cordenadas del objeto esten en el centro
       image(this.image,0,0,this.width,this.height);//dibujamos el objeto
       pop(); //te regresa a la configuracion inicial del objeto
    
    }
    }
    