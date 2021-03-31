class Pig{
    constructor(x,y){

        var options={
            restitution:1
        }
        this.pig=Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.pig)
        this.width=50
        this.height=50
    }

    display(){

        push()
        translate(this.pig.position.x,this.pig.position.y)
        rotate(this.pig.angle)
        angleMode(RADIANS)
        fill("green")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}