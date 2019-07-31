import React, {useState, useEffect} from 'react';

import {getGenres} from '../../services/ApiData'

import Loading from "../../components/Loading";
import {Link} from "react-router-dom";

const Genre = (props) => {

    const [newContent, setNewContent] = useState([]);
    const [loading, setLoading] = useState(true);

    // const content = Object.keys(props.location.state.content)[0];

    console.log(props.content)

    return (
        <div className={"container"}>
            <div className={"mt-6"}>
                <div className={"mb-10"}>
                    <Link
                        to={"/"}
                        className={"mr-1 text-gray-500 hover:text-white"}
                    >
                        Home
                    </Link>
                    <span className={"mr-1 text-gray-800"}>/</span>
                    <Link
                        to={"/genres"}
                        className={"mr-1 text-gray-500 hover:text-white"}
                    >
                        Genres
                    </Link>
                    <span className={"mr-1 text-gray-800"}>/</span>
                    {props.match.params.id}
                </div>
                {loading ? (
                        <Loading />
                    ) : (
                        <div>
                            {props.content}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Genre;