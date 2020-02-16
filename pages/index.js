import RoomService from "@roomservice/browser";
import { useSharedState } from "@roomservice/react";
import React from "react";
import Block from "../components/block";

const client = new RoomService({
  authUrl: "http://localhost:3000/api/roomservice"
});

export default () => {
  const [sharedState, setSharedState] = useSharedState(
    client,
    "demo-kanban-board"
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
      prevDoc.boards.push({ text: "", position: { x: 0, y: 0 } });
    });
  }

  function deleteBoard() {
    setSharedState(prevDoc => {
      prevDoc.boards.pop();
    });
  }

  const mappedBoards = (sharedState.boards || []).map(function(item, index) {
    return (
      <Block
        setPosition={sharedState.boards[index].position}
        onDrag={(e, pos) => onDrag(e, pos, index)}
      />
    );
  });

  return (
    <div>
      <h1>Kanban Board Demo</h1>
      <button onClick={createBoard}>Create Board</button>
      <button onClick={deleteBoard}>Delete Board</button>

      {/* <Block
        setPosition={sharedState.position}
        onDrag={(e, pos) => onDrag(e, pos)}
      /> */}
      {mappedBoards}
    </div>
  );
};

// pass in text
// pass in position
//{[{text, position}, {text, position}]}
