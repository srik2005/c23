class Box{
constructor(x,y,width,height){
    var options ={
        restitution: 1,
        friction: 0.1
    }

    this.ground= Bodies.rectangle(x,y,width,height,options);

    this.width = width;
    this.height = height;
    World.add(world,this.ground);

}
disrect(){
  push()
    translate(this.ground.position.x,this.ground.position.y)
   rotate(this.ground.angle)
   rectMode(CENTER) 
   
   rect(0,0,this.width,this.height);
pop();




}






}





















































