import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React, { useState, useEffect } from "react";
import Block from "../components/block";
import Button from "../components/button";
import PointerSVG from "../components/cursors/PointerSVG";
import useCursors from "../components/cursors/useCursors";

// KOBY DO THIS PART! 🚀
function MouseCursors(props) {
  const mousePositions = useCursors(props.room);

  // Steps: Can you render multiple <PointerSVG /> from
  // this array of mousePositions?

  return <PointerSVG x={50} y={30} fill={"#f6b93b"} />;
}

const App = () => {
  const ROOM = "demo-kanban-board";
  const [sharedState, setSharedState] = useSharedState(ROOM);

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
    console.log(index);
    setSharedState(prevDoc => {
      if (!prevDoc.boards) {
        return;
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
          handleChange(event, index);
        }}
      />
    );
  });

  return (
    <div>
      {/* It doesn't matter where <MouseCursors /> goes */}
      <MouseCursors room={ROOM} />
      <div className="navBar">
        <div className="titleContainer">
          <div className="projectTitle">Public Kanban Board</div>
          <div className="subTitle">
            Powered by <a href="https://roomservice.dev">Room Service</a>.
          </div>
        </div>

        {/* <button onClick={createBoard}>Create Board</button>
        <button onClick={deleteBoard}>Delete Board</button> */}
        <Button onClick={createBoard} buttonTitle={"Create Board"} />
        <Button onClick={deleteBoard} buttonTitle={"Delete Board"} />
      </div>
      <div className="kanbanContainer">
        <div className="boardBlock">{mappedBoards}</div>
        <div className="boardBlock"></div>
        <div className="boardBlock"></div>
        <div className="boardBlock"></div>
      </div>

      <style jsx>{`
        .kanbanContainer {
          display: flex;
          flex-direction: row;
        }
        .boardBlock {
          border-right: 2px dashed #599a5f;
          min-width: 273px;
          height: 100vh;
          padding: 25px;
        }
        a:active {
          color: #172b4d;
        }
        a:visited {
          color: #172b4d;
        }
        .projectTitle {
          color: #fff;
          margin-right: 25px;
          margin-bottom: 10px;
          font-size: 35px;
          font-weight: 900;
        }
        .titleContainer {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .subTitle {
          color: #fff;
          font-size: 16px;
        }
        .navBar {
          display: flex;
          width: 100%;
          padding: 20px;

          flex-direction: row;
          align-items: center;
          border-bottom: 5px solid #599a5f;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          background-color: #6cbc73;
          font-family: Arial;
        }
      `}</style>
    </div>
  );
};

export default () => {
  return (
    <RoomServiceProvider authUrl="http://localhost:3000/api/roomservice">
      <App />
    </RoomServiceProvider>
  );
};

// pass in text
// pass in position
//{[{text, position}, {text, position}]}
