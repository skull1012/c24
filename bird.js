class Bird{
    constructor(x,y){

        var options={
            restitution:1
        }
        this.bird=Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.bird)
        this.width=50
        this.height= 50
    }

    display(){
        this.bird.position.x=mouseX
        this.bird.position.y=mouseY


        push()
        translate(this.bird.position.x,this.bird.position.y)
        rotate(this.bird.angle)
        angleMode(RADIANS)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}