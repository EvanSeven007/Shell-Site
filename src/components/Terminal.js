import React, {Component} from "react";
import TerminalOutput from "./TerminalOutput";
import Prompt from "./Prompt";

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {commands: ["start"], results: []};
        this.promptRef = React.createRef();
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

    //Making the page scroll to the bottom so the terminal doesn't go off screen
    messagesEndRef = React.createRef()
    componentDidMount () {
        this.scrollToBottom()
        this.promptRef.current && this.promptRef.current.focus()
    }
      componentDidUpdate () {
        this.scrollToBottom()
        this.promptRef.current && this.promptRef.current.focus()
    }
    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: 'auto' })
    }

    render() {
        return(
            //render commands and handle in output, set commands in prompt
            <div>
                <TerminalOutput commands = {this.state.commands} clearCommands= {this.clearCommands.bind(this)}/>
                <Prompt ref = {this.promptRef} commands = {this.state.commands} setCommands_ = {this.wrapperSetCommmand.bind(this)}/>
                <div ref = {this.messagesEndRef}></div>
            </div>
        );
    }

}

export default Terminal;