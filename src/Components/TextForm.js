import React, { useState } from "react";

const TextForm = (props) => {
    
    
    const handleOnClick=()=>{

        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{

      let newText= text.toLowerCase();
      setText(newText);
  }

    const handleOnChange=(e)=>{

        setText(e.target.value)
    }

    const [text ,setText]=useState('')
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>

      <button type="btn" onClick={handleOnClick} className="btn btn-primary">
        Change to uppercase
      </button>

      <button type="btn" onClick={handleLoClick} className="btn btn-primary mx-3">
        Change to lowercase
      </button>
    </div>

    <div className="container my-4" >
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>

      <h2>Preview</h2>
      <p>{text}</p>

       
    </div>
    </>
  );
};

export default TextForm;
