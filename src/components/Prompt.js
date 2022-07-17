import {useState} from "react";

const Prompt = (props) => {
    const [input, setInput] = useState("");
    const [currCmdIndex, setCurrCmdIndex] = useState(0);

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleKey = (event) => {
        switch (event.key) {
            case "Enter":
                props.setCommands_(input);
                setInput("");
                setCurrCmdIndex(props.commands.length - 1);
                break
            case "ArrowUp":
                (currCmdIndex !== 0) ? setCurrCmdIndex(currCmdIndex - 1) : setCurrCmdIndex(0);
                document.getElementsByClassName("input-box").value = props.commands[currCmdIndex];
                setInput(props.commands[currCmdIndex]);
                break
            case "ArrowDown":
                (currCmdIndex !== props.commands.length - 1) ? setCurrCmdIndex(currCmdIndex + 1) : setCurrCmdIndex(props.commands.length - 1);
                document.getElementsByClassName("input-box").value = props.commands[currCmdIndex];
                setInput(props.commands[currCmdIndex]);
                break
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