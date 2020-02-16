import React, { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

function Block(props) {
  const [state, setState] = useState("");

  function handleChange(event) {
    setState(event.target.value);
  }

  return (
    <Draggable
      // position={{ x: 100, y: 100 }}
      // defaultPosition={{ x: 100, y: 100 }}
      position={props.setPosition}
      grid={[250, 250]}
      onDrag={props.onDrag}
      bounds={props.bounds}
      cancel="strong"
      enableUserSelectHack={false}
    >
      <div className="blockContainer">
        <textarea
          placeholder="Give a man a mask, and he will tweet the truth.."
          type="text"
          value={props.blockValue}
          onChange={props.blockOnChange}
        ></textarea>
        {props.blockTitle || "Blocki Boi"}
        <style jsx>{`
          .blockContainer {
            background-color: blue;
            width: 200px;
            height: 200px;
            margin: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 20px;
            border-radius: 15px;
            font-family: Arial;
          }
        `}</style>
      </div>
    </Draggable>
  );
}

export default Block;
