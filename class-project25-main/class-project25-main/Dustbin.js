class Dustbin{
      constructor(x, y, width, height){
       var options = {
           isStatic : true,
           restitution : 0,
           friction : 1,
           density : 0.1
       }

       this.body = Bodies.rectangle(x, y, width, height,options);
       this.width = 150;
       this.height = 190;
       this.image = loadImage("dustbingreen.png")
       World.add(world, this.body);

      }
display(){
    var p =this.body.position;
    imageMode(CENTER);
    fill(255);

image(this.image,p.x,p.y,this.width,this.height);    
  }
};