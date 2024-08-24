import {Component} from "react";

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
                                                          
                                                                                                                                 
                                                                                                                                        
                                                                                                                                        
const openUrl = async (url) => {
    setTimeout(() => window.open(url, url), "1000");
};                                                                                                                                

//const commands = ["about", "email", "github", "help", "hello", "linkedin", "projects", "resume", "start", "time"];

class TerminalOutput extends Component {
    constructor(props) {
        super(props);
        this.state = {results: []};
    }

    getDate() {
        const d = new Date();
        return d.toLocaleTimeString();
    }

    handleCommand(cmd, isLastIndex) {
        cmd.split(";")
        switch(cmd.toLowerCase().split(" ")[0]) {
            case "sudo":
                if (isLastIndex) {
                    openUrl("https://xkcd.com/838/");
                }
                return (
                    <div class = "output-box">Permission Denied: This incident will be reported.</div>
                )
            case "vim":
                return (
                    <div class = "output-box">Vim is not supported. Try emacs instead!</div>
                )
            case "emacs":
                return (
                    <div class = "output-box">Emacs is not supported. Try vim instead!</div>
                )
            case "touch":
                return (
                    <div class = "output-box">touch: cannot touch file: Permission denied</div>
                )
            default: 
                    
        }

        switch (cmd.toLowerCase().trim()) {
            case "":
                return <div></div>
            case "about":
                return (
                <span class = "output-box">
                    <p>Hello! I'm Evan Stegall, a recent Rice University CS grad turned Software Engineer at Stripe.</p>
                    <p>I have been hooked on programming ever since my first high school Python course, sparking an enjoyment for programming and tinkering that has driven my academic and professional pursuits ever since.</p>
                    <p>Feel free to connect with any of my contacts! (the 'help' command may prove useful!)</p>
                </span>
                )
            case "clear":
                this.props.clearCommands();
                break
            case "email":
                return (
                    <div class = "output-box"><a href="mailto: evanstegall123@gmail.com" target = "_blank" rel="noreferrer">evanstegall123@gmail.com</a></div>
                )
            case "github":
                if (isLastIndex) {
                    openUrl("https://github.com/EvanSeven007");
                };
                return <div>Opening Github...</div>
            case "help":
                return (
                    <div class = "output-box">
                        <p>Available Commands:</p>
                        <p>about, email, github, help, hello, linkedin, projects, resume, start, time</p>
                    </div>
                )
            case "hi":
                return <div class = "output-box">Hello!</div>
            case "hello":
                return <div class = "output-box">Hi!</div>
            case "linkedin":
                if (isLastIndex) {
                    openUrl("https://www.linkedin.com/in/evan-stegall/");
                };
                return <div>Opening Linkedin...</div>
            case "projects":
                return (
                    <div class = "output-box">
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
                    <div class = "start_banner">{start_message}</div>
                    <p>Type 'help' to see a list of commands</p>
                </div>
            case "time":
                return (
                    <div class = "output-box">{this.getDate()}</div>
                )
            default:
                return <div class = "output-box">{cmd} is not a valid command</div>
        }
    }

    render() {
        //Only getting called once
        const outputList = this.props.commands.map((o, key) => 
        <div key = {key}>
            <span class = "guest">guest</span>
            <span class = "prompt-stuff">@</span>
            <span class = "email">evanstegall.com</span>
            <span class = "prompt-stuff">$ ~ </span>
            <span class = "output-area">{o}{this.handleCommand(o, key === this.props.commands.length - 1)}</span>
        </div>);
        return (
            <>{outputList}</>
        );
    }
}

export default TerminalOutput;
