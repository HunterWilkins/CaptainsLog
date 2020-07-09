import React, {Component} from "react";
import "./style.css";


import axios from "axios";

class Home extends Component {

    state = {
        page: window.location.pathname.split("/")[1],
        roots: []
    }

    rootInfo = {
        name: "",
        desc: ""
    }

    componentDidMount = () => {
  
    }

    route = (destination) => {
        this.setState({
            page: destination
        });
    }

    render() {
        return (
            <div id = "content">
                <header>
                    <h1>Captain's Log</h1>
                </header>
                <main>
                    
                </main>
                <footer></footer>
            </div>
        )
    }
}

export default Home;