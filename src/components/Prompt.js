import {useState} from "react";

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
            default:
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