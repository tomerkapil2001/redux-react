import React from "react";
function Checks(props) {
    return(
        <div>
            <h1>name:{props.name}</h1>
            <button  onClick={props.alert}>Click</button>
        </div>
    )    
}
export default Checks
