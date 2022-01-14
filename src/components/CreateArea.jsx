import React, { useState } from "react";

function CreateArea(props) {

  const [inputText, setInputText] = useState({
    title:"",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    setInputText (prevValue => {
      if(name === "title"){
        return {
          title: value.substring(0, 20),
          content: prevValue.content.substring(0, 150)
        };
      }
      else if(name === "content"){
        return {
          title: prevValue.title.substring(0, 20),
          content: value.substring(0, 150)
        };
      }
    })
  }

 

  function setSubmitProp(event){
    event.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={setSubmitProp}>
        <input onChange={inputText.title.length<=20 ? handleChange: null}
          name="title" 
          placeholder="Title"
          value={inputText.title}  
        />
        
        <textarea onChange={inputText.content.length<=150 ? handleChange: null}
          name="content"
          placeholder="Take a note..."
          value={inputText.content}
          rows="4"
        />
        <p>{inputText.content.length}/150</p>
        <button onClick={() => {
          props.handleClick(inputText);
          setInputText({ title: "", content: ""});
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
