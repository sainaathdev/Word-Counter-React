import React, {useState} from 'react'

const TextForm = (props) => {
    const uppercaseConverter = () =>{
        let upper = text.toUpperCase();
        setText(upper)
    }

    const lowerCaseConverter = () => {
        let lower = text.toLowerCase();
        setText(lower)
    }

    const changeHandler = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState("")

    const [myStyle, setMystyle] = useState({
        backgroundColor: "white",
        height: "100vh",
        color: "black"
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const changeMode = ()=>{
        if(myStyle.color === "white"){
            setMystyle({
                backgroundColor: "white",
                height: "100vh",
                color: "black"
            })
            setBtnText("Enable Dark Mode")

        }
        else{
            setMystyle({
                backgroundColor: "black",
                height: "100vh",
                color: "white"
            })
            setBtnText("Enable Light Mode")
        }
    }
    
  return (
    <>
    <div style={myStyle}>
      <center> <h1 className='mt-3 my-3'>Word Counter</h1>     </center>
    
        
    
    <div className="mb-3 m-3" >
        <h2 className='mt-3 my-3'>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={changeHandler} id="form-control" rows="8"></textarea>
    </div>
    <center>
    <button className="btn btn-primary mx-3 " onClick={uppercaseConverter}>UpperCase</button>
    <button className="btn btn-success mx-3" onClick={lowerCaseConverter}>LowerCase</button>
    <button className="btn btn-info mx-3" onClick={changeMode}>{btnText}</button>
    </center>

    <div className="conatiner mx-5 ml-5 mt-5">
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    </div>
    <h2 className='mx-5 ml-5 mt-5'>Preview</h2>
    <p className='mx-5 ml-5'>{text}</p>
    </div>
    
    </>
)
}

export default TextForm
