import React from "react"

let BlogProps = (props) => {
    return (
        <div className="propBoxes">
            <p className="propTitle">{props.title}</p>
            <p className="propsubTitle">{props.subTitle}</p>
            <p className="authorship">Posted by <span className="authored">{props.author}</span> {props.date}</p>
            <hr></hr>
        </div>
    )
} 

export default BlogProps;










