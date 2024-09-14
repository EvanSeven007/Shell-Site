import {useState} from "react";

type Props = {
    setCommands_: (arg0: string) => void;
    commands: string | any[];
  };


const commands = ["about", "email", "github", "help", "hello", "linkedin", "projects", "resume", "start", "time", "vim", "emacs"];
const Prompt = (props: Props) => {
    const [input, setInput] = useState("");
    const [currCmdIndex, setCurrCmdIndex] = useState(0);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const handleTab = () => {
        let matches: string[] = [];
        commands.forEach(command => {
            if (command.startsWith(input.toLowerCase())) {
                matches.push(command);
            }
        });
        if (matches.length === 1) {
            const inputBox = document.getElementsByClassName("input-box")[0] as HTMLInputElement;
            inputBox.value = matches[0];
            setInput(matches[0]);
        }
    }

    const input_box: HTMLInputElement = document.getElementsByClassName("input-box") as unknown as HTMLInputElement;

    const handleKey = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case "Enter":
                props.setCommands_(input);
                setInput("");
                setCurrCmdIndex(props.commands.length - 1);
                break
            case "ArrowUp":
                (currCmdIndex !== 0) ? setCurrCmdIndex(currCmdIndex - 1) : setCurrCmdIndex(0);
                input_box.value = props.commands[currCmdIndex];
                setInput(props.commands[currCmdIndex]);
                break
            case "ArrowDown":
                (currCmdIndex !== props.commands.length - 1) ? setCurrCmdIndex(currCmdIndex + 1) : setCurrCmdIndex(props.commands.length - 1);
                input_box.value = props.commands[currCmdIndex];
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
            <span className = "guest">guest</span>
            <span className = "prompt-stuff">@</span>
            <span className = "email">evanstegall.com</span>
            <span className = "prompt-stuff">$ ~ </span>
            <input type="text" className = "input-box" value={input} onChange={handleInput} onKeyDown={handleKey} autoFocus/>
        </div>
    );
}

export default Prompt;