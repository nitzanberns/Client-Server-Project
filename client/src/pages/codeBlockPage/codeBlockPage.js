import React, {useState, useEffect} from "react";
import './codeBlockPage.css';
import { useParams } from 'react-router-dom';

// const db= 'https://moveoTask:qwe123@cluster0.51emnwa.mongodb.net/?retryWrites=true&w=majority';
const db= 'https:localhost3000';

function CodeBlockPage(){
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");

    const {id} = useParams();

    useEffect( () => {
        const getList = async () => {
          const res = await fetch(`${db}/codeBlock/${id}`);
          setTitle(res.title);
          setCode(res.code);
        };
        getList();
      }, [id]);

    const onChange = (event) => {setCode(event.target.value)};

    return(
        <div> 
            <div className="header">
                <h2>{title}</h2>
            </div>
            <form>
                <label>Code: 
                    <textarea onChange={onChange} rows="4" cols="50">{code}</textarea>
                </label>
            </form>
            
        </div>
    ); 
}

export default CodeBlockPage;
