class Paper{
    constructor(x, y, radius){
       var options = {
          
           restitution : 0.3,
           friction : 0.5,
           density : 1.2
       }
       this.body = Bodies.rectangle(x, y, radius,radius, options);
       this.radius = radius;
       this.image = loadImage("paper.png")
       World.add(world,this.body);
    }
    display(){
        var  p = this.body.position;
        imageMode(CENTER);
        rectMode(CENTER)
        //fill(77, 255, 255);

        image(this.image,p.x,p.y,this.radius,this.radius)
    }
}