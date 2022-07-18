import {Component} from "react";

const start_message = 
"########:'##::::'##::::'###::::'##::: ##:::::'######::'########:'########::'######::::::'###::::'##:::::::'##:::::::\n" + 
" ##.....:: ##:::: ##:::'## ##::: ###:: ##::::'##... ##:... ##..:: ##.....::'##... ##::::'## ##::: ##::::::: ##:::::::\n" + 
" ##::::::: ##:::: ##::'##:. ##:: ####: ##:::: ##:::..::::: ##:::: ##::::::: ##:::..::::'##:. ##:: ##::::::: ##:::::::\n" + 
" ######::: ##:::: ##:'##:::. ##: ## ## ##::::. ######::::: ##:::: ######::: ##::'####:'##:::. ##: ##::::::: ##:::::::\n" + 
" ##...::::. ##:: ##:: #########: ##. ####:::::..... ##:::: ##:::: ##...:::: ##::: ##:: #########: ##::::::: ##:::::::\n" + 
" ##::::::::. ## ##::: ##.... ##: ##:. ###::::'##::: ##:::: ##:::: ##::::::: ##::: ##:: ##.... ##: ##::::::: ##:::::::\n" + 
" ########:::. ###:::: ##:::: ##: ##::. ##::::. ######::::: ##:::: ########:. ######::: ##:::: ##: ########: ########:\n" + 
"........:::::...:::::..:::::..::..::::..::::::......::::::..:::::........:::......::::..:::::..::........::........::\n";       
                                                          
                                                                                                                                 
                                                                                                                                        
                                                                                                                                        
const openUrl = async (url) => {
    setTimeout(() => window.open(url, url), "2000");
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
        switch (cmd.toLowerCase().trim()) {
            case "":
                return <div></div>
            case "about":
                return (
                <span class = "output-box">
                    <p>First off, thank you for visiting my website, whoever you may be. Feel free to take a look around!</p>
                    <p>Hi! My name is Evan Stegall and I am a Junior Computer Science Student at Rice University.</p>
                    <p>I have been hooked on programming and problem solving ever since I took my first Python course in high school, and since then I have
                        been in love with all things computer science.</p>
                    <p>My current career goals includes learning as much as I can about tech, both as a future Software Engineer and as a software hobbyist.</p>
                    <p>In my free time, I enjoy climbing, powerlifting, reading, and listening to as much music as I can.</p>
                    <p>Feel free to connect with any of my contacts! (the 'help' command may prove useful!)</p>
                </span>)
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
                        <p> - Using pandas for data processing and tensorflow for data analysis, we implemented and trained a random-forest classifier, eventually getting around 70.4% precision despite having a highly sparse training graph.</p>
                    </div>
                )
            case "resume":
                if (isLastIndex) {
                    openUrl("resume.pdf");
                };
                return <div>Opening Resume...</div>;
            case "start":
                return <div class = "start_banner">
                    <p>{start_message}</p>
                    <p>Type 'help' to see a list of commands</p>
                </div>
            case "sudo":
                return (
                    <div class = "output-box">Permission Denied: With great power comes great responsibility...</div>
                )
            case "time":
                return (
                    <div class = "output-box">{this.getDate()}</div>
                )
            default:
                return <div class = "output-box">{cmd} is not a valid command</div>
        }
    }
    render() {
        //Only getting caleld once
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
