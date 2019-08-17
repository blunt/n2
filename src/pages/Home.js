import React, {useState, useEffect} from 'react';
import {getNew, getResults} from '../services/ApiData'
import { withRouter } from "react-router-dom";
import history from '../history';

import Loading from "../components/Loading";
import List from "../components/List";
import PageHeader from "../components/PageHeader";
import Nav from "../components/Nav";
import Title from "./Title";

const Home = (props) => {

    const [newContent, setNewContent] = useState([]);
    const [activeCountry, setActiveCountry] = useState("ca");
    const [activeCountryNumber, setActiveCountryNumber] = useState("33");
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [genres, setGenres] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [isTitle, setIsTitle] = useState(false);
    const [title, setTitle] = useState(0);

    const getHomeContent = (activeCountry) => {
        setLoading(true);
        if (sessionStorage.getItem("newContent" + activeCountry) === null) {
            getNew(activeCountry).then((content) => {
                try {
                    setNewContent(content);
                    setLoading(false);
                } catch {
                    setLoading(false);
                }
            });
        } else {
            setNewContent(JSON.parse(sessionStorage.getItem("newContent" + activeCountry) || "[]"));
            setLoading(false);
        }
    }

    const getSearchResults = (keyword, genres, activeCountry) => {
        setLoading(true);
        getResults(keyword, genres, activeCountry).then((content) => {
            try {
                setNewContent(content);
                setLoading(false);
            } catch {
                setLoading(false);
            }
        });
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setIsTitle(false);
            setLoading(true);
            if (keyword === "") {
                setSearching(false);
                getHomeContent();
            } else {
                setSearching(true);
                getSearchResults(keyword, genres, activeCountryNumber);
            }
        }
    }

    const handleTitle = (event) => {
        const titleId = event.target.getAttribute('data-id')
        setIsTitle(true);
        setTitle(titleId);
        history.push('/titles/' + titleId, { id: titleId });
    }

    window.onpopstate = function () {
        const path = history.location.pathname;
        if (path.includes('titles')) {
            const newTitle = path.replace('/titles/', '');
            setIsTitle(true);
            setTitle(Number(newTitle));
        } else {
            setIsTitle(false);
        }
    };

    useEffect(() => {
        const path = history.location.pathname;
        if (path.includes('titles')) {
            const newTitle = path.replace('/titles/', '');
            setIsTitle(true);
            setTitle(Number(newTitle));
        }
    }, []);

    const handleHome = (event) => {
        setIsTitle(false);
        history.push('/');
    }

    const handleInputChange = (event) => {
        setIsTitle(false);
        let count = document.querySelectorAll("#genres :checked").length;
        const target = event.target;
        const value = target.value;
        const status = target.checked;

        if (status === true) {
            setGenres([...genres, value])
        } else {
            const newGenres = genres.filter(genre =>
                genre !== value
            );
            setGenres(newGenres);
        }

        if (count > 0) {
            setSearching(true);
            setLoading(true);
        } else if (count === 0) {
            setSearching(false);
            setLoading(false);
            getHomeContent(activeCountry);
        }

    }

    const handleCountryChange = (event) => {
        const value = event.target.value;
        const obj = event.target;
        const number_id = obj.options[obj.selectedIndex].getAttribute('data-id');

        setActiveCountry(value)
        setActiveCountryNumber(number_id)
    }

    useEffect(() => {
        if (genres.length > 0 || keyword !== "") {
            getSearchResults(keyword, genres, activeCountryNumber);
        } else {
            getHomeContent(activeCountry);
        }
    }, [genres, activeCountry, activeCountryNumber]);

    return (
        <div className={"page-container"}>
            <Nav
                handleInputChange={handleInputChange}
                handleCountryChange={handleCountryChange}
                handleHome={handleHome}
                defaultCountry={"33"}
            />
            <div className={"container"}>
                <div>
                    <PageHeader
                        home={true}
                        keyword={keyword}
                        handleKeyDown={handleKeyDown}
                        setKeyword={setKeyword}
                    />
                    {isTitle ? (
                        <Title id={title}/>
                    ) : (
                        loading ? (
                            <div>
                                <Loading/>
                            </div>
                        ) : (
                            searching ? (
                                <List
                                    title={newContent.length + ' results'}
                                    content={newContent}
                                    handleTitle={handleTitle}
                                />
                            ) : (
                                <List
                                    title={newContent.length + " new titles"}
                                    content={newContent}
                                    handleTitle={handleTitle}
                                />
                            )
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);