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
    const [activeGenres, setActiveGenres] = useState([]);
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
        history.push('/n2/titles/' + titleId, { id: titleId });
    }

    window.onpopstate = function () {
        const path = history.location.pathname;
        if (path.includes('titles')) {
            const newTitle = path.replace('/n2/titles/', '');
            setIsTitle(true);
            setTitle(Number(newTitle));
        } else {
            setIsTitle(false);
        }
    };

    useEffect(() => {
        const path = history.location.pathname;
        if (path.includes('titles')) {
            const newTitle = path.replace('/n2/titles/', '');
            setIsTitle(true);
            setTitle(Number(newTitle));
        }
    }, []);

    const handleHome = (event) => {
        setIsTitle(false);
        history.push('/n2');
    }

    const handleInputChange = (event) => {
        setIsTitle(false);
        let count = document.querySelectorAll("#genres :checked").length;
        const target = event.target;
        const value = target.value;
        const status = target.checked;

        if (status === true) {
            setGenres([...genres, value])
            setActiveGenres([...activeGenres, [target.name, target.value]]);
        } else {
            removeGenre(event);
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

    const removeGenre = (event) => {
        const target = event.target;
        const value = target.getAttribute("data-id");
        const otherValue = target.value;
        const newGenres = genres.filter(genre =>
            genre !== value
        );
        const newActiveGenres = activeGenres.filter(genre =>
            otherValue ? (
                genre[1] !== otherValue
            ) : (
                genre[1] !== value
            )
        );

        const checkbox = document.querySelectorAll(".genre-checkbox[value=" + JSON.stringify(value) + "]")[0];

        if (checkbox) {
            checkbox.checked = false;
        }

        setGenres(newGenres);
        setActiveGenres(newActiveGenres);
    }

    const handleCountryChange = (event) => {
        setIsTitle(false);
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
                                >
                                    { activeGenres.map((activeGenre, i) => (
                                        <button
                                            key={activeGenre[1]}
                                            data-id={activeGenre[1]}
                                            className={"ml-2 px-1 text-xs rounded inline-block text-center border cursor-pointer border-gray-900 hover:border-gray-600 focus:outline-none"}
                                            onClick={removeGenre}
                                        >
                                            {activeGenre[0]} x
                                        </button>
                                    ))}
                                </List>
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