import React, {useState, useEffect} from 'react';
import {getNew, getResults} from '../services/ApiData'

import Loading from "../components/Loading";
import List from "../components/List";
import Search from "../components/Search";
import Breadcrumb from "../components/Breadcrumb";
import PageHeader from "../components/PageHeader";
import Nav from "../components/Nav";

const Home = (props) => {

    const [newContent, setNewContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [searchedKeyword, setSearchedKeyword] = useState("");
    const [genres, setGenres] = useState("");
    const [keyword, setKeyword] = useState("");


    const getHomeContent = () => {
        getNew().then((content) => {
            try {
                setNewContent(content);
                setLoading(false);
            } catch {
                setLoading(false);
            }
        });
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
        if (props.location.state !== undefined) {
            console.log(props.location.state.keyword);
            setSearching(true);
            setLoading(true);
            setKeyword(props.location.state.keyword);
            setSearchedKeyword(props.location.state.keyword);
            getSearchResults(props.location.state.keyword, genres);
        } else {
            setSearching(false);
            getHomeContent();
        }
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setLoading(true);
            setSearchedKeyword(keyword);
            if (keyword === "") {
                setSearching(false);
                getHomeContent();
            } else {
                setSearching(true);
                getSearchResults(keyword, genres);
            }
        }
    }

    if (props.location.state !== undefined) {
        console.log('haaaai', props.location.state.genres)
    }

    const handleInputChange = (event) => {
        let count = document.querySelectorAll("#genres :checked").length;
        const target = event.target;
        const value = target.value;
        const status = target.checked;
        const name = target.name;

        if (count > 0) {
            setSearching(true);
            setLoading(true);
            if (status) {
                console.log('addd');
                setGenres([...genres, value])
            } else {
                console.log('remove');
                const newGenres = genres.filter(genre => genre === value);
                setGenres(newGenres);
            }
        } else if (count == 0) {
            setSearching(false);
            setLoading(false);

            console.log('remove');
            const newGenres = genres.filter(genre => genre === value);
            setGenres(newGenres);
            getHomeContent();
        } else if (status === false) {
            console.log('remove');
            const newGenres = genres.filter(genre => genre === value);
            setGenres(newGenres);
        }
    }

    useEffect(() => {
        console.log('genres clicked', genres)
        if (genres != "") {
            getSearchResults(keyword, genres);
        }
    }, [genres])

    console.log('genres', genres)

    return (
        <div className={"page-container"}>
            <Nav
                handleInputChange={handleInputChange}
            />
            <div className={"container"}>
                <div>
                    <PageHeader
                        home={true}
                        keyword={keyword}
                        handleKeyDown={handleKeyDown}
                        setKeyword={setKeyword}
                    />
                    {loading ? (
                            <Loading />
                        ) : (
                            searching ? (
                                <List
                                    title={newContent.length + ' results'}
                                    content={newContent}
                                />
                            ) : (
                                <List
                                    title={"New"}
                                    content={newContent}
                                    page={"/"}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;