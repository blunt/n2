import React, {useState, useEffect} from 'react';
import {getCountries, getGenres} from "../services/ApiData";

const Nav = (props) => {

    const [genres, setGenres] = useState([]);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredGenres, setFilteredGenres] = useState([]);
    const [finalGenres, setFinalGenres] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (localStorage.getItem("genres") === null) {
            getGenres().then((content) => {
                try {
                    setGenres(content);
                    setLoading(false);
                } catch {

                }
            })
        } else {
            setGenres(JSON.parse(localStorage.getItem("genres") || "[]"))
            setLoading(false);
        }

        if (localStorage.getItem("countries") === null) {
            getCountries().then((content) => {
                try {
                    setCountries(content);
                    document.querySelector('#select_id [value="ca"]').selected = true;
                    setLoading(false);
                } catch {

                }
            })
        } else {
            setCountries(JSON.parse(localStorage.getItem("countries") || "[]"))
            setLoading(false);
        }
    }, []);

    useEffect( () => {
        if (keyword !== "") {
            const filteredGenres = genres.filter(genre =>
                JSON.stringify(Object.keys(genre)).toLowerCase().includes(keyword)
            );
            setFilteredGenres(filteredGenres);
        } else {
            setFilteredGenres([])
        }
    }, [keyword, genres]);

    useEffect( () => {
        if (filteredGenres.length > 0) {
            setFinalGenres(filteredGenres);
        } else {
            setFinalGenres(genres);
        }
    }, [filteredGenres, genres]);

    return (
        <header className={"flex flex-col p-6 md:sticky top-0 h-screen md:w-1/3 w-full"}>
            <div>
                <h1 className={"text-sm"}>
                    <div
                        onClick={props.handleHome}
                        className={"inline-block border-b border-transparent hover:border-white cursor-pointer"}
                    >
                        N²
                    </div>
                </h1>
                <h2 className={"text-2xl leading-tight max-w-xs my-8"}>The fastest way to find something to watch on Netflix.</h2>
            </div>
            <div className={"mb-4"}>
                {!loading &&
                    <select
                        className={"bg-transparent w-full p-0 appearance-none focus:outline-none text-sm text-gray-500 hover:text-white"}
                        onChange={props.handleCountryChange}
                        defaultValue={"ca"}
                        id={"select_id"}
                    >
                        {countries.map((item) => {
                            const number_id = Object.values(item)[0];
                            const id = Object.values(item)[1];
                            const name = Object.values(item)[2];
                            return (
                                <option
                                    value={id}
                                    key={number_id}
                                    data-id={number_id}
                                >
                                    {name}
                                </option>
                            )
                        })
                        }
                    </select>
                }
            </div>
            <input
                className={"w-full bg-black focus:outline-none text-sm py-4"}
                type={"text"}
                value={keyword}
                placeholder={"Search genres"}
                onChange={e => setKeyword(e.target.value)}
            />
            <nav
                id={"genres"}
                className={"relative flex-grow overflow-hidden border-b border-t border-gray-800"}
            >
                <div className={"absolute py-4 top-0 bottom-0 overflow-y-scroll hide-scrollbar"}>
                    {!loading &&
                        finalGenres.map((item) => {
                            const genreTitle = Object.keys(item)[0];
                            const genreIds = Object.values(item)[0].join();
                            return (
                                <label
                                    key={genreTitle}
                                    className={"block text-sm text-gray-500 hover:text-white"}
                                >
                                    <input
                                        className={"genre-checkbox"}
                                        name={genreTitle}
                                        type={"checkbox"}
                                        checked={props.isActive}
                                        onChange={props.handleInputChange}
                                        value={genreIds}
                                    />
                                    <span className={"label"}>{genreTitle}</span>
                                </label>
                            )
                        }
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Nav;