import React from "react";
import {Component} from "react";



interface TerminalOutputProps {
    clearCommands: () => void;
    commands: string[];
}

const start_message = 
"███████╗██╗   ██╗ █████╗ ███╗   ██╗                       \n" + 
"██╔════╝██║   ██║██╔══██╗████╗  ██║                       \n" + 
"█████╗  ██║   ██║███████║██╔██╗ ██║                       \n" + 
"██╔══╝  ╚██╗ ██╔╝██╔══██║██║╚██╗██║                       \n" + 
"███████╗ ╚████╔╝ ██║  ██║██║ ╚████║                       \n" + 
"╚══════╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═══╝                       \n" + 
"                                                          \n" + 
"███████╗████████╗███████╗ ██████╗  █████╗ ██╗     ██╗     \n" + 
"██╔════╝╚══██╔══╝██╔════╝██╔════╝ ██╔══██╗██║     ██║     \n" + 
"███████╗   ██║   █████╗  ██║  ███╗███████║██║     ██║     \n" + 
"╚════██║   ██║   ██╔══╝  ██║   ██║██╔══██║██║     ██║     \n" + 
"███████║   ██║   ███████╗╚██████╔╝██║  ██║███████╗███████╗\n" + 
"╚══════╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝\n";   
                                                          
                                                                                                                                 
                                                                                                                                        
                                                                                                                                        
const openUrl = async (url: string) => {
    setTimeout(() => window.open(url, url), 1000);
};                                                                                                                                

class TerminalOutput extends Component<TerminalOutputProps> {
    constructor(props: TerminalOutputProps) {
        super(props);
        this.state = {results: []};
    }

    getDate() {
        const d = new Date();
        return d.toLocaleTimeString();
    }

    handleCommand(cmd: string, isLastIndex: boolean) {
        cmd = cmd.startsWith("./") ? cmd.slice(2) : cmd;
        cmd.split(";")
        switch(cmd.toLowerCase().split(" ")[0]) {
            case "sudo":
                if (isLastIndex) {
                    openUrl("https://xkcd.com/838/");
                }
                return (
                    <div className = "output-box">Permission Denied: This incident will be reported.</div>
                )
            case "vim":
                return (
                    <div className = "output-box">Vim is not supported. Try emacs instead!</div>
                )
            case "emacs":
                return (
                    <div className = "output-box">Emacs is not supported. Try vim instead!</div>
                )
            case "touch":
                return (
                    <div className = "output-box">touch: cannot touch file: Permission denied</div>
                )
            default: 
                    
        }

        switch (cmd.toLowerCase().trim()) {
            case "":
                return <div></div>
            case "about":
                return (
                <span className = "output-box">
                    <p>Hello! I'm Evan Stegall, a Rice University CS graduate and current Software Engineer at Stripe.</p>
                    <p>I mostly work in the full-stack space, focusing on internal tooling to help Stripe's operational needs.</p>
                    <p>Feel free to connect with any of my contacts! (the 'help' command may prove useful!)</p>
                </span>
                )
            case "clear":
                this.props.clearCommands();
                break;
            case "email":
                return (
                    <div className = "output-box"><a href="mailto: evanstegall123@gmail.com" target = "_blank" rel="noreferrer">evanstegall123@gmail.com</a></div>
                )
            case "github":
                if (isLastIndex) {
                    openUrl("https://github.com/EvanSeven007");
                };
                return <div>Opening Github...</div>
            case "help":
                return (
                    <div className = "output-box">
                        <p>Available Commands:</p>
                        <p>about, email, github, help, hello, linkedin, projects, resume, start, time</p>
                    </div>
                )
            case "hi":
                return <div className = "output-box">Hello!</div>
            case "hello":
                return <div className = "output-box">Hi!</div>
            case "linkedin":
                if (isLastIndex) {
                    openUrl("https://www.linkedin.com/in/evan-stegall/");
                };
                return <div>Opening Linkedin...</div>
            case "projects":
                return (
                    <div className = "output-box">
                        <p><a href = "https://github.com/EvanSeven007/ReeseBot">Reese Bot</a> - A playable chess engine built in Rust using the minimax algorithm with alpha-beta pruning</p>
                        <p><a href = "https://devpost.com/software/hfh-data-boys">The Missing Link</a> - Worked on a team of four to create a link prediction program for a given social network, winning 2nd best undergraduate team overall.</p>
                        <p> - Used pandas for data processing and tensorflow for data analysis, we implemented and trained a random-forest classifier, eventually getting around 70.4% precision despite having a highly sparse training graph.</p>
                    </div>
                )
            case "resume":
                if (isLastIndex) {
                    openUrl("resume.pdf");
                };
                return <div>Opening Resume...</div>;
            case "start":
                return <div>
                    <div className = "start_banner">{start_message}</div>
                    <p>Type 'help' to see a list of commands</p>
                </div>
            case "time":
                return (
                    <div className = "output-box">{this.getDate()}</div>
                )
            case "ls":
                return (
                    <div className = "output-box">
                    <p>about*     email*     github*    help*      hello*     linkedin*</p>
                    <p>projects*  resume*    start*     time*      ls*        pwd*</p>
                    <p>cowsay*</p>
                </div>
                )
            case "cowsay":
                return (
                    <div className = "output-box">
                        <p> _________________</p>
                        <p>&lt; Moo! I'm a cow! &gt;</p>
                        <p> -----------------</p>
                        <p>        \   ^__^</p>
                        <p>         \  (oo)\_______</p>
                        <p>            (__)\       )\/\</p>
                        <p>                ||----w |</p>
                        <p>                ||     ||</p>
                    </div>
                )
            case "whoami":
                return <div className = "output-box">guest</div>
            case "pwd":
                return <div className = "output-box">/Users/guest</div>
            default:
                return <div className = "output-box">{cmd} is not a valid command</div>
        }
    }

    render() {
        const outputList = this.props.commands.map((o, key) => 
        <div key = {key} className = "terminal-prompt">
            <span className = "guest">guest</span>
            <span className = "prompt-stuff">@</span>
            <span className = "email">evanstegall.com</span>
            <span className = "output-prompt-stuff">$ ~ </span>
            <span className = "output-area">
                <span className = "output-command">{o}</span>
                {this.handleCommand(o, key === this.props.commands.length - 1)}
            </span>
        </div>);
        return (
            <>{outputList}</>
        );
    }
}

export default TerminalOutput;
