import React from 'react';
import {Link} from "react-router-dom";

const Breadcrumb = (props) => {
    return (
        <div className={"mb-8 pb-1 text-sm invisible"}>
        {props.home ? (
                'Home'
            ) : (
                <div>
                    <Link
                        to={"/"}
                        className={"mr-1 border-b border-transparent text-gray-500 hover:border-white hover:text-white"}
                    >
                        Home
                    </Link>
                    {props.children}
                </div>
            )
        }
        </div>
    )
}

export default Breadcrumb;