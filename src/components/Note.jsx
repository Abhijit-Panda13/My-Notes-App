import React from "react";

function Note(props) {
  return (
    <div className="note">
      <button onClick={() =>{
          props.onChecked(props.id)
        }}>🗙</button>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p className="timeinfo">Created at {props.time}</p>
      
    </div>
  );
}

export default Note;
