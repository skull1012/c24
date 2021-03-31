class Box{
    constructor(x,y,width,height){

        var options={
            restitution:1
        }
        this.box=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.box)
        this.width=width
        this.height=height
    }

    display(){

        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        angleMode(RADIANS)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}