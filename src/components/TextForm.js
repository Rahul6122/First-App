import React,{useState} from 'react'
import PropTypes from 'prop-types'


const TextForm = (props) => {
   const[text,setText] = useState("");
   
   const up=(event)=>{
    setText(event.target.value)
   }
   const upp =()=>{
    let newText = text.toLocaleUpperCase();
    setText(newText)
   }
   const low=()=>{
    let newText =text.toLocaleLowerCase();
    setText(newText)
   } 
  return (  
     <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.name}</h1>
             
           <div className="mb-3">
        <textarea className="form-control"  value={text } onChange={up}  style={{backgroundColor: props.mode==='light'?'white':'#13466e', color : props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
       </div>
       <button disabled={text.length===0} className='btn btn-primary mx-3' onClick={upp}>Uppercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={low}>Lowercase</button>
    </div>
    <div className="con" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your Summary</h2>
      <p>{text.split(/\s+/).filter((a)=> {return a.length!==0}).length}words and {text.length}characters</p>
      <p>{0.008*text.split(" ").filter((a)=> {return a.length!==0}).length} minute read</p>
    <h2>Preview </h2>
      <p>{text}</p>
    </div>
    </>
  ) 
}

TextForm.propTypes ={
    name : PropTypes.string
 }
 TextForm.defaultProps ={
  name : "About me"
 }


export default TextForm;
