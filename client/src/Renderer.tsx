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

    let [char1Pos, setChar1Pos] = React.useState<Position>({x: leftSide, y: 0});
    return (<>
        {dialogheight ? <canvas id="canvas" width={screenwidth} height={screenheight-64-dialogheight} style={{position: "absolute", left: 0, top: 0}}></canvas> : null}
    </>)
}

export default Renderer;