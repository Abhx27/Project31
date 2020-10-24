class Plinko{
    constructor(){
var options = {
    
}
    this.body = Bodies.circle(x,y,this.releaseEvents,options);
    World.add(world, this.body); 
    }
    display(){
        for(var j = 40; j <=width; j = j+ 50){
            plinkos.push(new Plinko(j,75));
        }
        for (var j = 15; j <=width-10; j=j+50){
            plinkos.push(new Plinko(j,175));
        }
    }   
}