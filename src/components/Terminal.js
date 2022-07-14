import react, {Component, useState} from "react";
import TerminalOutput from "./TerminalOutput";
import Prompt from "./Prompt";

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {commands: ["start"], results: []};
    }

    wrapperSetCommmand(cmd) {
        this.setState({
            commands: [...this.state.commands, cmd]
        });
    }

    clearCommands() {
        this.setState({
            commands: []
        });
    }

    render() {
        return(
            //render commands and handle in output, set commands in prompt
            <div>
                <TerminalOutput commands = {this.state.commands} clearCommands= {this.clearCommands.bind(this)}/>
                <Prompt setCommands_ = {this.wrapperSetCommmand.bind(this)}/>
            </div>
        );
    }

}

export default Terminal;