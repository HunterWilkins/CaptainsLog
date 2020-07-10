import React, {Component} from "react";
import "./style.css";
import Modal from "../../components/Modal/index.js";

import axios from "axios";

class Home extends Component {

    state = {
        page: window.location.pathname.split("/")[1],
        roots: [],
        modal: false,
    }

    rootInfo = {
        name: "",
        desc: ""
    }

    componentDidMount = () => {
        axios.get("/api/todos/all").then((response) => {
            console.log(response.data);
        })
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
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
                {
                    this.state.modal ? 
                    <Modal></Modal>
                    :
                    null
                }
                <main>
                    <p>This is the Main Page</p>
                </main>

                <aside>
                    <div className = "div-button" onClick = {this.toggleModal}>
                        <p>+</p>
                    </div>
                </aside>
                <footer>
                    <p>Hunter Wilkins</p>
                </footer>
            </div>
        )
    }
}

export default Home;