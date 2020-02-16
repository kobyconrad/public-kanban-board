import React from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

function Block(props) {
  return (
    <Draggable
      // position={{ x: 100, y: 100 }}
      // defaultPosition={{ x: 100, y: 100 }}
      position={props.setPosition}
      grid={[250, 250]}
      onDrag={props.onDrag}
      bounds={props.bounds}
    >
      <div>
        {props.blockTitle || "Blocki Boi"}
        <style jsx>{`
          div {
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
