import React, {useState, useEffect} from 'react';
import {getNew, getResults} from '../services/ApiData'
import { withRouter } from "react-router-dom";

import Loading from "../components/Loading";
import List from "../components/List";
import PageHeader from "../components/PageHeader";
import Nav from "../components/Nav";

const Home = (props) => {

    const [newContent, setNewContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [genres, setGenres] = useState("");
    const [keyword, setKeyword] = useState("");
    const [title, setTitle] = useState(true);


    const getHomeContent = () => {
        if (localStorage.getItem("newContent") === null) {
            getNew().then((content) => {
                try {
                    setNewContent(content);
                    setLoading(false);
                } catch {
                    setLoading(false);
                }
            });
        } else {
            setNewContent(JSON.parse(localStorage.getItem("newContent") || "[]"));
            setLoading(false);
        }
    }

    const getSearchResults = (keyword, genres) => {
        getResults(keyword, genres).then((content) => {
            try {
                setNewContent(content);
                setLoading(false);
            } catch {
                setLoading(false);
            }
        });
    }

    useEffect(() => {
        setSearching(false);
        getHomeContent();
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setTitle(false);
            setLoading(true);
            if (keyword === "") {
                setSearching(false);
                getHomeContent();
            } else {
                setSearching(true);
                getSearchResults(keyword, genres);
            }
        }
    }

    const handleTitlePage = () => {
        setTitle(true);
    }

    const handleInputChange = (event) => {
        setTitle(false);
        let count = document.querySelectorAll("#genres :checked").length;
        const target = event.target;
        const value = target.value;
        const status = target.checked;

        if (count > 0) {
            setSearching(true);
            setLoading(true);
            if (status) {
                setGenres([...genres, value])
            } else {
                const newGenres = genres.filter(genre => genre === value);
                setGenres(newGenres);
            }
        } else if (count === 0) {
            setSearching(false);
            setLoading(false);

            const newGenres = genres.filter(genre => genre === value);
            setGenres(newGenres);
            getHomeContent();
        } else if (status === false) {
            const newGenres = genres.filter(genre => genre === value);
            setGenres(newGenres);
        }
    }

    useEffect(() => {
        if (genres !== "") {
            getSearchResults(keyword, genres);
        }
    }, [keyword, genres])

    return (
        <div className={"page-container"}>
            <Nav
                handleInputChange={handleInputChange}
            />
            <div className={"container"}>
                <div>
                    {props.location.pathname.includes('title') && title ? (
                        props.children
                    ) : (
                        <div className={"pt-6"}>
                            <PageHeader
                                home={true}
                                keyword={keyword}
                                handleKeyDown={handleKeyDown}
                                setKeyword={setKeyword}
                            />
                            {loading ? (
                                <div>
                                    <Loading/>
                                </div>
                            ) : (
                                searching ? (
                                    <List
                                        title={newContent.length + ' results'}
                                        content={newContent}
                                        onTitlePage={handleTitlePage}
                                    />
                                ) : (
                                    <List
                                        title={newContent.length + " new titles"}
                                        content={newContent}
                                        onTitlePage={handleTitlePage}
                                    />
                                )
                            )
                            }
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);