import RoomService from "@roomservice/browser";
import { useSharedState } from "@roomservice/react";
import React, { useState } from "react";
import Block from "../components/block";

const client = new RoomService({
  authUrl: "http://localhost:3000/api/roomservice"
});

export default () => {
  const [sharedState, setSharedState] = useSharedState(
    client,
    "demo-kanban-board"
  );
  const [textState, setTextState] = useSharedState(
    client,
    "demo-kanban-board-text-state"
  );

  function onDrag(e, position, index) {
    const { x, y } = position;
    setSharedState(prevDoc => {
      prevDoc.boards[index].position = { x, y };
    });
  }

  function createBoard() {
    setSharedState(prevDoc => {
      if (!Array.isArray(prevDoc.boards)) {
        prevDoc.boards = [];
      }
      prevDoc.boards.push({ text: "whoa", position: { x: 0, y: 0 } });
    });
  }

  function deleteBoard() {
    setSharedState(prevDoc => {
      prevDoc.boards.pop();
    });
  }

  function handleChange(event, index) {
    // setTextState(prevDoc => {
    //   prevDoc.event = event.target.value;
    // });

    setSharedState(prevDoc => {
      if (typeof prevDoc.boards[index] === "undefined") {
        prevDoc.boards[index] = {};
      }
      prevDoc.boards[index].event = event.target.value;
    });
  }

  const mappedBoards = (sharedState.boards || []).map(function(item, index) {
    return (
      <Block
        setPosition={sharedState.boards[index].position}
        onDrag={(e, pos) => onDrag(e, pos, index)}
        //blockValue={textState.event || ""}
        blockValue={sharedState.boards[index].event || ""}
        blockOnChange={function(event) {
          handleChange(event);
        }}
      />
    );
  });

  return (
    <div>
      <h1>Kanban Board Demo</h1>
      <button onClick={createBoard}>Create Board</button>
      <button onClick={deleteBoard}>Delete Board</button>

      {mappedBoards}
    </div>
  );
};

// pass in text
// pass in position
//{[{text, position}, {text, position}]}
