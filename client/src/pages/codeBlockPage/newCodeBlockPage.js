import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';
import './newCodeBlockPage.css';


function NewCodeBlockPage(){
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");

    const onClick = () => {    
        const id = uuidv4(); //unique id for the new code block
        fetch('/newCodeBlock', {method: 'POST', data: {id, title, code}});         
        }
        
    useEffect(() => {},[]);

    const onChangeTitle = (event) => {setTitle(event.target.value)};

    const onChangeCode = (event) => {setCode(event.target.value)};


    return( 
        <div>   
            <div className="header">
                <h2>Fill in the fields</h2>
            </div>
            <form>
                <label className="titVis">
                    <div className="codeVis">Title:</div>
                    <textarea onChange={onChangeTitle} type="text" />
                </label>
            </form>
            <form>
                <label className="titVis">
                    <div className="codeVis">Code:</div>
                    <textarea onChange={onChangeCode} type="text" />
                </label>
            </form>
            <button onClick={onClick}>
              <h4>save</h4>
            </button>
        </div>
    );
    
}

export default NewCodeBlockPage;
