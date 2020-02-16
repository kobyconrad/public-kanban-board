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
      grid={[250, 250]}
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
            backgroundColor: "blue",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            border: "1px solid blue",
            fontStyle: "Arial",
            placeholder: {
              color: "white"
            }
          }}
          placeholder="Type anything here.."
          type="text"
          value={props.blockValue}
          onChange={props.blockOnChange}
        ></TextareaAutosize>

        <style jsx>{`
          .blockContainer {
            background-color: blue;
            width: 250px;
            min-height: 100px;
            margin: 25px;
            display: flex;
            padding: 20px 10px 20px 10px;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 20px;
            border-radius: 15px;
            font-family: Arial;
          }
          TextareaAutosize {
            width: 100%;
            background-color: black;
            outline: none;
            resize: none;
            display: flex;
          }
          ::-webkit-textareaautosize-placeholder {
            color: red;
          }
        `}</style>
      </div>
    </Draggable>
  );
}

export default Block;
