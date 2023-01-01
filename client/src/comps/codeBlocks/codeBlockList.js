import React,  { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./codeBlockList.css";

const db= 'http://localhost:3000';


function CodeBlockList(){
    const [codeBlocks, setCodeBlocks] = useState([]);

    useEffect( () => {
      const getList = async () => {
        const res = await fetch(db, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          mode: 'cors',
          cache: 'default',
          
        });
        console.log(res);
        setCodeBlocks(await res.json());
      }
      getList();
    }, []);
    
    // const codeBlocks = [{"id": "1", "title": "Async-case", "code": "this is the 1st code block"}, 
    //                     {"id": "2", "title": "2nd code block", "code": "this is the 2nd code block"},
    //                     {"id": "3", "title": "3rd code block", "code": "this is the 3rd code block"},
    //                     {"id": "4", "title": "4th code block", "code": "this is the 4th code block"}];

    const navigate = useNavigate();
    
    return (
        //creating the list:
        <ul> {codeBlocks.map((item) => {
            const navigateTo = () => navigate(`/codeBlock/${item.id}`); //for each code block, navigate to the code block page
            return (
              <div className= "listVis" key = {item.title}>
                <h2 className= "titleVis">{item.title}</h2>
                <button className= "buttonVis" onClick={navigateTo}>click to see the code</button>
              </div>)})}</ul>
    );

    // if (!codeBlocks) {
    //   return <p>Loading...</p>;
    // }
  
    // return (
    //   // <ul>{codeBlocks}</ul>
    //   <div>
    //     <ul> {codeBlocks.map((item) => {
    //         const navigateTo = () => navigate(`/codeBlock/${item.id}`); //for each code block, navigate to the code block page
    //         return (
    //           <div className= "listVis" key = {item.title}>
    //             <h2 className= "titleVis">{item.title}</h2>
    //             <button className= "buttonVis" onClick={navigateTo}>click to see the code</button>
    //           </div>)})}</ul>
    //   </div>
    // );
  }

  
export default CodeBlockList;  