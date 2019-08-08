import React, {useState, useEffect} from 'react';
import {getGenres} from '../../services/ApiData'
import {Route} from "react-router-dom";

import Loading from "../../components/Loading";
import {Link} from "react-router-dom";
import Genre from "./Genre";
import PageHeader from "../../components/PageHeader";

const Genres = () => {

    const [newContent, setNewContent] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <div className={"container"}>
            <div>
                <PageHeader
                    home={false}
                    // keyword={keyword}
                    // handleKeyDown={handleKeyDown}
                    // setKeyword={setKeyword}
                >
                    <span className={"mr-1 text-gray-800"}>/</span>
                    Genres
                </PageHeader>
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