import {VectorXY} from "./VectorXY";
import { MouseEvent } from 'react';


export class MouseHandler {

    position : VectorXY = new VectorXY(0,0)

    handleMouseMove(evt: MouseEvent) {
        console.log(evt)
        console.log(this.position)
        console.log(this.position.x)
        this.position.y = evt.pageY
        this.position.x = evt.pageX
    }

}
