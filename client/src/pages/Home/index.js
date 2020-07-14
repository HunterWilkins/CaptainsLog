import React, {Component} from "react";
import "./style.css";
import Modal from "../../components/Modal/index.js";

import axios from "axios";

class Home extends Component {

    state = {
        page: window.location.pathname.split("/")[1],
        roots: [],
        modal: false,
        todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [],
    }

    localTodos = [];

    componentDidMount = () => {
        // axios.get("/api/todos/all").then((response) => {
        //     console.log(response.data);
        // });


    }

    grabTodos = () => {
        this.setState({
            todos: JSON.parse(localStorage.getItem("todos"))
        });
    }

    createTodo = (todoInfo) => {
        console.log(todoInfo);
        this.localTodos.push(todoInfo);
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
                    <Modal localTodos = {this.localTodos}></Modal>
                    :
                    null
                }
                <main>
                    {
                        this.state.todos.map(todo => {
                            return(
                                <div className = "todo">
                                    <p className = "time">{todo.startTime.hour + ":" + todo.startTime.minutes}</p>
                                    <p className = "title">{todo.title}</p>
                                    <input id = "" id = {todo.title.replace(/ /g, "") + todo.startTime.hour + "isComplete"} className = "complete" type = "checkbox"></input>
                                    <label for = {todo.title.replace(/ /g, "") + todo.startTime.hour + "isComplete"} className = "complete-label"></label>
                                </div>
                            )
                        })
                    }
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