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

    const handleCopy =() => {
      navigator.clipboard.writeText(text);
      props.showAlert('Text Copied', 'primary')
    }

    const handleExtraSpace =() => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Removed Extra-spaces', 'success')
    }

  return (
    <>
    <div style={{ color:props.mode ==='dark'?'white':'black'}}>
    <h1 className='my-2'>Enter the text Below...</h1>
    <div className="mb-3">
     <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark'?'#31313a':'white', color:props.mode ==='dark'?'white':'black'}} value ={text} onChange={handleChange} rows="8"></textarea>
    </div>
    <button disabled ={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} m-1`} onClick={handleUpperClick}>Convert To Uppercase</button>
    <button disabled ={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} m-1`} onClick={handlelowerClick}>Convert To Lowecase</button>
    <button disabled ={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} m-1`} onClick={handleClear}>Clear all</button>
    <button disabled ={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} m-1`} onClick={handleCopy}>Copy Text</button>
    <button disabled ={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} m-1`} onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{ color:props.mode ==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.length ===0?'0':text.split(/\s+/).filter((elements)=>{return elements.length !== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter((elements)=>{return elements.length !== 0}).length} minutes to read</p>
      <p>{text.split(".").length-1} sentence</p>
      <h2>Preview</h2>
      <p>{text.length ===0?'Nothing to Preview!':text}</p>
    </div>
    </>
    
  )
}
