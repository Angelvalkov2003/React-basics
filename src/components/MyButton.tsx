import React, { useState } from "react";
interface Props {
  name: string;
  type?: string; //default na private

  onClicked: (item: string) => void;
}

function MyButton({ name, type = "good", onClicked }: Props) {
  //pravim default na type

  return (
    <>
      {type === "good" && (
        <button
          className="btn btn-success"
          onClick={() => {
            onClicked("Good");
          }}
        >
          {name}
        </button>
      )}
      {type === "bad" && (
        <button
          className="btn btn-danger"
          onClick={() => {
            onClicked("Bad");
          }}
        >
          {name}
        </button>
      )}
    </>
  );
}

export default MyButton;
