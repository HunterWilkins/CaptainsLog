import React from "react";
import "./style.css";
import axios from "axios";

function Modal(props) {

    let info = {
        title: "",
        desc: "",
        startTime: {
            hour: "",
            minutes: ""
        },
        duration: 0,
        isOptional: false,
    };

    function createTodo(event) {
        event.preventDefault();
        console.log(info);
        props.localTodos.push(info);
        localStorage.setItem("todos", JSON.stringify(props.localTodos));
        // axios.post("/api/newTodo", info);
    }

    function changeInfo(event) {
        if (event.target.name === "hour" || event.target.name === "minutes") {
            info.startTime[event.target.name] = event.target.value;
        }

        else if (event.target.name === "hour (duration)" || event.target.name === "minutes (duration)") {
            if (event.target.name === "hour") {
                info.duration += parseInt(event.target.value) * 60;
            }

            else {
                info.duration += parseInt(event.target.value);
            }
        }

        else if (event.target.name === "isOptional") {
            info.isOptional = event.target.checked;
        }

        else {
            info[event.target.name] = event.target.value
        }

        console.log(info);
    }

    return(
        <div id = "modal-box">
            <form onChange = {changeInfo} id = "modal">
                <input type = "text" placeholder = "Title" name = "title"></input>

                <section>
                    <input type = "number" placeholder = "Hour"  min = "1" max = "12" name = "hour"></input>
                    <span>:</span>
                    <input type = "number" placeholder = "Minutes" min = "0" max = "59" name = "minutes"></input>  
                    <input id = "isPM" type = "checkbox"></input>
                    <label className = "checkbox" for = "isPM">PM</label> 
                    
                    <br></br>
                    
                    <input type = "number" placeholder = "Hour"  min = "1" max = "12" name = "hour (duration)"></input>
                    <span>:</span>
                    <input type = "number" placeholder = "Minutes" min = "0" max = "59" name = "minutes (duration)"></input>  
                </section>
                
                <textarea name = "desc" placeholder = "Description. Describe the goal/activity, if you want.">

                </textarea>

                <input id = "isOptional" name = "isOptional" type = "checkbox"></input>
                <label className = "checkbox" for = "isOptional">Required?</label>
                <button onClick = {createTodo}>Submit</button>
            </form>
        </div>
    )
}

export default Modal;