import { render } from "@testing-library/react";
import react, {Component, useEffect, useState} from "react";
import Terminal from "./Terminal.js";

const username = "guest@evanstegall.com:$ ";
const prompt = "> ";

const Prompt = (props) => {
    const [input, setInput] = useState("");
    
    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleKey = (event) => {
        switch (event.key) {
            case "Enter":
                props.setCommands_(input);
                setInput("");
                break;
        }
    }

    return (
        <div className = "terminal-prompt">
            <span class = "guest">guest</span>
            <span class = "prompt-stuff">@</span>
            <span class = "email">evanstegall.com</span>
            <span class = "prompt-stuff">$ ~ </span>
            <input type="text" class = "input-box" value={input} onChange={handleInput} onKeyDown={handleKey} autoFocus/>
        </div>
    );
}

export default Prompt;