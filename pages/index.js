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

  function onDrag(e, position) {
    const { x, y } = position;
    setSharedState(prevDoc => {
      // prevDoc.block = { position: { x, y } };
      prevDoc.position = { x, y };
    });
  }

  return (
    <div>
      <h1>Kanban Board Demo</h1>

      <Block
        setPosition={sharedState.position}
        onDrag={(e, pos) => onDrag(e, pos)}
      />
    </div>
  );
};
