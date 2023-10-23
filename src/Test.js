import React from 'react'
import "./App.css";
// function base componet

function Test(props) {  
     return (<div className="App">
    <h1>Test Function Componet Created {props.name} {props.age}</h1>
    </div>)
}

export default Test;