import {MouseHandler} from "./MouseHandler";
import {VectorXY} from "./VectorXY";


export class Cue {

    position = new VectorXY(400,400)
    origin = new VectorXY(500,10)
    canvas: CanvasRenderingContext2D


    constructor(canvas: CanvasRenderingContext2D) {
        this.canvas = canvas
    }

    draw() {
        this.canvas.drawImage()
        this.canvas.fillStyle = 'white'
        this.canvas.fillRect(0, 0, 1200, 800)
        this.canvas.fillStyle = 'brown'
        this.canvas.fillRect(this.position.x, this.position.y, 300, 20)
    }

    move(x: number, y: number) {
       this.position = {
           x,y
       }
       this.draw()
    }

}
