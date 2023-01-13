import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
   
    const handleUpperClick = ()=> { 
         setText (text.toUpperCase())
         props.showAlert('Converted to UpperCase', 'success')
        };

        const handlelowerClick = ()=> { 
          setText (text.toLowerCase())
          props.showAlert('Converted to LowerCase', 'success')
         };

    const handleChange = (event)=>{
        setText(event.target.value)
    };

    const handleClear=()=>{
      setText('')
      props.showAlert('Text Cleared', 'primary')
    }

  return (
    <>
    <div style={{ color:props.mode ==='dark'?'white':'black'}}>
    <h1>Enter the text Below...</h1>
    <div className="mb-3">
     <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode ==='dark'?'white':'black'}} value ={text} onChange={handleChange} rows="8"></textarea>
    </div>
    <button className={`btn btn-${props.mode==='dark'?'light':'dark'} m-1`} onClick={handleUpperClick}>Convert To Uppercase</button>
    <button className={`btn btn-${props.mode==='dark'?'light':'dark'} m-1`} onClick={handlelowerClick}>Convert To Lowecase</button>
    <button className={`btn btn-${props.mode==='dark'?'light':'dark'} m-1`} onClick={handleClear}>Clear all</button>
    </div>
    <div className="container my-3" style={{ color:props.mode ==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.length ===0?'0':text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to Read</p>
      <p>{text.split(".").length-1} sentence</p>
      <h2>Preview</h2>
      <p>{text.length ===0?'Write Something...':text}</p>
    </div>
    </>
    
  )
}
