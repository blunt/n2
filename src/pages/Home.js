import React, {useState, useEffect} from 'react';
import {getNew, getResults} from '../services/ApiData'
import { withRouter } from "react-router-dom";
import history from '../history';

import Loading from "../components/Loading";
import List from "../components/List";
import PageHeader from "../components/PageHeader";
import Nav from "../components/Nav";
import Title from "./Title";
import RemoveIcon from '../assets/images/remove.svg';

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


    /*
        On enter, if keyword isn't empty, search content.
    */
    const handleSearch = (event) => {
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


    /*
        Navigate user to title page
    */
    const handleTitle = (event) => {
        const titleId = event.target.getAttribute('data-id')
        setIsTitle(true);
        setTitle(titleId);
        history.push('/n2/#/titles/' + titleId, { id: titleId });
    }


    /*
        On browser back, check if path is title or home page.
    */
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


    /*
        Return user to homepage.
    */
    const handleHome = (event) => {
        setIsTitle(false);
        history.push('/n2');
    }

    /*
        If genre is selected, add genre tag, check checkbox, and set active genres.
    */
    const handleSelectGenre = (event) => {
        setIsTitle(false);
        const target = event.target;
        const value = target.value;
        const status = target.checked;

        if (status === true) {
            setGenres([...genres, value])
            setActiveGenres([...activeGenres, [target.name, target.value]]);
        } else {
            removeGenre(event);
        }

        let count = document.querySelectorAll("#genres :checked").length;


        if (count > 0) {
            setSearching(true);
            setLoading(true);
        } else if (count === 0) {
            setSearching(false);
            setLoading(false);
            getHomeContent(activeCountry);
        }

    }


    /*
        If genre is unselected, remove genre tag, uncheck checkbox, and reset active genres.
    */
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


    /*
        If country changes, set title to false and set active country.
    */
    const handleCountryChange = (event) => {
        setIsTitle(false);
        const value = event.target.value;
        const obj = event.target;
        const number_id = obj.options[obj.selectedIndex].getAttribute('data-id');

        setActiveCountry(value)
        setActiveCountryNumber(number_id)
    }

    /*
        Check window hash and redirect to title page if it contains 'titles'.
    */
    useEffect(() => {
        const path = window.location.hash;
        if (path.includes('titles')) {
            const newTitle = path.replace('#/titles/', '');
            setIsTitle(true);
            setTitle(Number(newTitle));
        }
    }, []);

    /*
        If selected genres or search keyword active, show results, else show new content.
    */
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
                handleInputChange={handleSelectGenre}
                handleCountryChange={handleCountryChange}
                handleHome={handleHome}
                defaultCountry={"33"}
            />
            <div className={"container"}>
                <div>
                    <PageHeader
                        home={true}
                        keyword={keyword}
                        handleKeyDown={handleSearch}
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
                                            className={"transition flex items-center ml-2 px-1 text-xs rounded inline-block text-center border cursor-pointer border-gray-900 hover:border-gray-600 focus:outline-none text-gray-500 hover:text-white"}
                                            onClick={removeGenre}
                                        >
                                            <span>{activeGenre[0]}</span>
                                            <svg className={"w-3 h-auto ml-1"} width="64" height="64" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 56C27.2533 56 22.6131 54.5924 18.6663 51.9553C14.7195 49.3181 11.6434 45.5698 9.8269 41.1844C8.0104 36.799 7.53512 31.9734 8.46116 27.3178C9.38721 22.6623 11.673 18.3859 15.0294 15.0294C18.3859 11.673 22.6623 9.38721 27.3178 8.46116C31.9734 7.53512 36.799 8.0104 41.1844 9.8269C45.5698 11.6434 49.3181 14.7195 51.9553 18.6663C54.5924 22.6131 56 27.2533 56 32C56 38.3652 53.4714 44.4697 48.9706 48.9706C44.4697 53.4714 38.3652 56 32 56ZM17 32C17 31.4696 17.2107 30.9609 17.5858 30.5858C17.9609 30.2107 18.4696 30 19 30H45C45.5304 30 46.0392 30.2107 46.4142 30.5858C46.7893 30.9609 47 31.4696 47 32C47 32.5304 46.7893 33.0392 46.4142 33.4142C46.0392 33.7893 45.5304 34 45 34H19C18.4696 34 17.9609 33.7893 17.5858 33.4142C17.2107 33.0392 17 32.5304 17 32Z" fill="currentColor"/>
                                            </svg>
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