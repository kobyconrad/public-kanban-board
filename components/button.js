import React from "react";

function Button(props) {
  return (
    <div className="buttonContainer" onClick={props.onClick}>
      {props.buttonTitle}

      <style jsx>{`
        .buttonContainer {
          width: 125px;
          height: 50px;
          background-color: #e7e9ed;
          color: #172b4d;
          font-size: 16px;
          font-weight: bold;
          border-radius: 10px;
          margin-left: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .buttonContainer:hover {
          background-color: #e0e1e6;
        }
      `}</style>
    </div>
  );
}

export default Button;
