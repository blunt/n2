import React, {useState, useEffect} from 'react';

import {getGenre, getGenres, getResults} from '../../services/ApiData'

import Loading from "../../components/Loading";
import {Link, Redirect} from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import PageHeader from "../../components/PageHeader";
import List from "../../components/List";

const Genre = (props) => {

    const [newContent, setNewContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState("");
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGenre(props.match.params.id).then((content) => {
            try {
                setNewContent(content);
                setLoading(false);
                console.log(content)
            } catch {
                setLoading(false);
            }
        });
    }, [props.match.params.id]);


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (keyword === "") {
                setSearching(false);
            } else {
                setSearching(true);
            }
        }
    }

    return (
        !searching ? (
            <div className={"container"}>
                <div>
                    <PageHeader
                        home={false}
                        keyword={keyword}
                        handleKeyDown={handleKeyDown}
                        setKeyword={setKeyword}
                    >
                    </PageHeader>
                    {loading ? (
                            <Loading />
                        ) : (
                            <List
                                title={newContent.length + ' results'}
                                content={newContent}
                            />
                        )
                    }
                </div>
            </div>
        ) : (
            <Redirect
                to={{
                    pathname: '/',
                    state: {keyword: keyword}
                }}
            />
        )
    )
}

export default Genre;