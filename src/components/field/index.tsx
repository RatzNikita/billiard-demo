import React, {LegacyRef, useRef, useState, MouseEvent} from "react";
import styles from './styles.module.css'
import {Cue} from "../../classes/Cue";
import {MouseHandler} from "../../classes/MouseHandler";
import {Ball} from "../../classes/Ball";
import {VectorXY} from "../../classes/VectorXY";


function Field() {

    const canv = useRef<HTMLCanvasElement>(null)
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
    const [mouseHandler, setMouseHandler] = useState<MouseHandler>(new MouseHandler())
    const [cue, setCue] = useState<Cue>()
    const [whiteBall, setWhiteBall] = useState<Ball>()

    console.log('mouseHandler', mouseHandler)


    React.useEffect(() => {
        initCanvas()
    }, [])

    React.useEffect(() => {
        if (ctx) {
            ctx.fillStyle = 'magenta'
            ctx.beginPath();
            ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            ctx.stroke();
            const newCue = new Cue(ctx)
            setCue(newCue)
            setWhiteBall(new Ball(ctx, new VectorXY(413, 413)))
        }
    }, [ctx])

    React.useEffect(() => {
        if(whiteBall) {
            whiteBall.draw()
        }
    },[whiteBall])

    const handleMouseMove = (evt: MouseEvent) => {
        if (cue) {
            cue.move(evt.pageX, evt.pageY)
        }
    }


    function initCanvas() {
        const canvas = canv.current
        if (canvas) {
            setCtx(canvas.getContext('2d'))
            canvas.width = 1200
            canvas.height = 800

        }
    }

    return (
        <div className={styles.container} onMouseMove={handleMouseMove}>
            <canvas className={styles.canvas} ref={canv}></canvas>
        </div>
    )
}

export default Field
