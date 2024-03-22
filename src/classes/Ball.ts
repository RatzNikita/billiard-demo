import {VectorXY} from "./VectorXY";


export class Ball {

    position: VectorXY
    canvas: CanvasRenderingContext2D

    constructor(canvas: CanvasRenderingContext2D,position: VectorXY) {
        this.canvas = canvas
        this.position = position
    }

    draw() {
        this.canvas.beginPath();
        this.canvas.arc(this.position.x,this.position.y, 50, 0, 2 * Math.PI);
        this.canvas.stroke();
    }
}
