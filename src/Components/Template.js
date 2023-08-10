import React from "react";


const Template = ({title, details}) => {



    return(
        <div className="section">
            <hr />
            <h1>{title}</h1>
            <p>{details}</p>
        </div>
    )
}

export default Template;