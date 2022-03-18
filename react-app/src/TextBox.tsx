import React, {useState} from 'react';
import './App.css';


function TextBox(props : any) {
    return (
        <div className="TextBox">
            <label>{props.label}</label>
            {/*if there's an issue it's that text below is not type="text"*/}
            <input type="text" onChange={event => props.change(event.target.value)}></input>
        </div>
    );
}

export default TextBox;