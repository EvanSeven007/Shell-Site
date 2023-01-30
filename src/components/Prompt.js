import {useState} from "react";

const commands = ["about", "email", "github", "help", "hello", "linkedin", "projects", "resume", "start", "time", "vim", "emacs"];
const Prompt = (props) => {
    const [input, setInput] = useState("");
    const [currCmdIndex, setCurrCmdIndex] = useState(0);

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleTab = () => {
        let matches = [];
        commands.forEach(command => {
            if (command.startsWith(input.toLowerCase())) {
                matches.push(command);
            }
        });
        if (matches.length === 1) {
            document.getElementsByClassName("input-box").value = matches[0];
            setInput(matches[0]);
        }
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
            case 'Tab':
                event.preventDefault();
                handleTab()
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