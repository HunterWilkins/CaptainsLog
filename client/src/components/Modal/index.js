import React from "react";
import "./style.css";

function Modal(props) {


    return(
        <div id = "modal-box">
            <form id = "modal">
                <input type = "text" placeholder = "Title" name = "title"></input>

                <section>
                    <input type = "number" placeholder = "Hour"  min = "1" max = "12" name = "hour"></input>
                    <span>:</span>
                    <input type = "number" placeholder = "Minutes" min = "0" max = "59" name = "minutes"></input>  
                    <input id = "isPM" type = "checkbox"></input>
                    <label className = "checkbox" for = "isPM">PM</label> 
                </section>
                
                <textarea placeholder = "Description. Describe the goal/activity, if you want.">

                </textarea>

                <input id = "isOptional" type = "checkbox"></input>
                <label className = "checkbox" for = "isOptional">Required?</label>
                <button>Submit</button>
            </form>
        </div>

    )
}

export default Modal;