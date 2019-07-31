import React, {useState, useEffect} from 'react';
import {getGenres} from '../../services/ApiData'
import {Route} from "react-router-dom";

import Loading from "../../components/Loading";
import {Link} from "react-router-dom";
import Genre from "./genre";

const Genres = () => {

    const [newContent, setNewContent] = useState([]);
    const [loading, setLoading] = useState(true);

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
                    Genres
                </div>
                {loading ? (
                        <Loading />
                    ) : (
                        <ul>
                            genres
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default Genres;