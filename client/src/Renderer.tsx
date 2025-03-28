import React from "react";
import "./index.css"


function Renderer() {
    interface Position {
        x: number;
        y: number;
    }

    let screenheight:number = window.innerHeight;
    let screenwidth:number = window.innerWidth;

    
    let leftSide:number = screenwidth/2 - 0.2*screenwidth;
    let rightSide:number = screenwidth/2 + 0.2*screenwidth;
    
    let dialogheight = document.getElementById("dialogSelect")?.offsetHeight
    let canvasHeight:number = screenheight-64
    if (dialogheight) {
        canvasHeight -= dialogheight;
    }

    let [char1Pos, setChar1Pos] = React.useState<Position>({x: rightSide, y: canvasHeight*1/3});
    return (<>
        {dialogheight ? <canvas id="canvas" width={screenwidth} height={canvasHeight} style={{position: "absolute", left: 0, top: 0}}></canvas> : null}
    </>)
}

export default Renderer;