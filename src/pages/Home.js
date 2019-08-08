import React, {useState, useEffect} from 'react';
import {getNew, getResults} from '../services/ApiData'

import Loading from "../components/Loading";
import List from "../components/List";
import Search from "../components/Search";
import Breadcrumb from "../components/Breadcrumb";
import PageHeader from "../components/PageHeader";

const Home = (props) => {

    const [newContent, setNewContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [searchedKeyword, setSearchedKeyword] = useState("");
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

    const getSearchResults = (keyword) => {
        getResults(keyword).then((content) => {
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
            getSearchResults(props.location.state.keyword);
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
                getSearchResults(keyword);
            }
        }
    }

    return (
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
                                title={newContent.length + ' results for ' + searchedKeyword}
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
    )
}

export default Home;