import React from 'react';
import {Link} from "react-router-dom";

const Button = (props) => {

    const buttonStyle = {
        transition: "all .1s ease-in"
    };

    let classes = "mr-2 py-1 px-3 text-sm rounded inline-block text-center border ";

    if (props.type === "secondary") {
        classes += "border-gray-900 hover:border-gray-600"
    }  else {
        classes += "bg-gray-900 border-gray-900 hover:bg-gray-700 hover:border-gray-700"
    }

    return (
        props.linkType === 'link' ? (
                <Link
                    to={props.link}
                    className={classes}
                    style={buttonStyle}
                >
                    {props.label}
                </Link>

            ) : (
                <a
                    href={props.link}
                    className={classes}
                    style={buttonStyle}
                    target={"_blank"}
                    rel={"norefferer"}
                >
                    {props.label}
                </a>
            )

    )
}

export default Button;