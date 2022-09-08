import React, { useState } from "react";

export default function TextForm(props) {
    // const [mytext,setmyText]=useState("")
    const handleOnChange=(event)=>{
        // console.log("hjhi")
        setText(event.target.value)
    }

    const handleClearClick=()=>{
        // console.log("Ji"+text);
        let newText=""
        setText(newText);
        props.showAlert("Cleared text","Success");
    }

    const handleUpClick=()=>{
        // console.log("Ji"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","Success");
    }

    const handleLowClick=()=>{
        // console.log("Ji"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","Success");
    }

    const handleCopyClick=()=>{
      navigator.clipboard.writeText(text);
      // console.log(text);
      props.showAlert("Copy to clipboard","Success");
    }

    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      console.log(newText)
      setText(newText.join(" "));
      props.showAlert("Removed Extra Spaces","Success");
    }


  const [text, setText] = useState("");
  // const [sel,setSel] = useState(false)
//   text="new hi" //Wrong way
//   setText("hi") // Correct way
// const styles={
    
// }
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"rgb(14 61 104)"}}>
      <h1 style={{color:props.mode==="dark"?"white":"black"}}>{props.heading}</h1>
      <div className="my-3">
        <textarea className="form-control" placeholder="Enter Text Here"  value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==="dark"?"#042743":"white" ,color:props.mode==="dark"?"white":"rgb(14 61 104)"}} ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((ele)=>ele.length!==0).length} Words {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((ele)=>ele.length!==0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
