import React from "react";
import "./popup.css"

function Popup(props){
    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inter">
                <h3 className="titulo">{props.titulo}</h3>
                <p className="message">{props.sms}</p>
                <button className="close-btn" onClick={()=>props.setTriger(false)}>
                    close
                </button>
            </div>
        </div>
    ):"";
}
export default Popup