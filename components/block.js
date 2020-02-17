import React, { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import TextareaAutosize from "react-textarea-autosize";

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
      grid={[326, 1]}
      onDrag={props.onDrag}
      bounds={props.bounds}
      cancel="strong"
      enableUserSelectHack={false}
    >
      <div className="blockContainer">
        <TextareaAutosize
          style={{
            minHeight: 40,
            width: "100%",
            outline: "none",
            resize: "none",
            backgroundColor: "#ebecf0",
            color: "#172b4d",
            fontSize: "16px",
            cursor: "pointer",
            border: "1px solid #ebecf0",
            fontStyle: "Arial"
          }}
          placeholder="Write anything here.."
          type="text"
          value={props.blockValue}
          onChange={props.blockOnChange}
        ></TextareaAutosize>

        <style jsx>{`
          .blockContainer {
            position: absolute;
            background-color: #ebecf0;
            width: 250px;
            min-height: 70px;
            display: flex;
            padding: 20px 10px 20px 10px;
            margin-bottom: 25px;
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
