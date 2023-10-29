import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>
  {
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to Uppercase", "success");
  }
  const handleLowClick =()=>
  {
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to Lowercase", "success");
  }
  const handleCopy=()=>{
    var text=document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied", "success");
  }
  const handleExtraSpaces=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success");
  }
  const handleClear =()=>
  {
    let newText= '';
    setText(newText)
    props.showAlert("Text Cleared", "success");
  }
  const handleOnchange=(event)=>{
     setText(event.target.value)
  }
  const[text, setText] = useState("");
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#3b3553'}}>
   <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#040445':'white', color:props.mode==='dark'?'white':'#3b3553'}} id="myText" rows="8"></textarea>
</div> 
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#3b3553'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the text-box above to preview it"}</p>
    </div>
    </>
  )
}
