class Log{
    constructor(x,y,width,height,angle){

        var options={
            restitution:1
        }
        this.log=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.log)
        this.width=width
        this.height=height
        Matter.Body.setAngle(this.log,angle)
    }

    display(){

        push()
        translate(this.log.position.x,this.log.position.y)
        rotate(this.log.angle)
        angleMode(RADIANS)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}