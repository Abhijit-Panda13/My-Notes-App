import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {v4 as uuidv4} from "uuid";

function App() {

    const[Notes, createNote] = useState([]);

    function addItem(text){
        const getTime = new Date().toLocaleTimeString();
        const textWithKey = {...text, key: uuidv4(), time: getTime};
        createNote (prevValue => {
            return([...prevValue, textWithKey]);
        });
    }

    function deleteItem(id){
        createNote(prevValue => {
            return prevValue.filter(item => {
                return item.key !== id;
            });
        });
    }


  return (
    <div>
      <Header />
      <CreateArea 
        handleClick = {addItem}/>
      {Notes.map(noteElement =>(
          <Note 
              onChecked = {deleteItem}
              time = {noteElement.time}
              key = {noteElement.key}
              id = {noteElement.key}
              title = {noteElement.title}
              content = {noteElement.content}
          />
      ))}
      <Footer />
    </div>
  );
}

export default App;
