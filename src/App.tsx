import React, {Component} from "react";
import "./App.css";
import Terminal from "./components/Terminal.js"

class App extends Component {
    render() {
        return (
            <div className = "website">
                <Terminal/>
            </div>
        );
    }
}

export default App;