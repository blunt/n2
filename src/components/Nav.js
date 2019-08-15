import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {getGenres} from "../services/ApiData";

const Nav = (props) => {

    const [genres, setGenres] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (localStorage.getItem("genres") === null) {
            getGenres().then((content) => {
                try {
                    setGenres(content);
                } catch {

                }
            })
        } else {
            setGenres(JSON.parse(localStorage.getItem("genres") || "[]"))
        }
    }, []);

    useEffect( () => {
        if (keyword !== "") {
            const filteredGenres = genres.filter(genre =>
                JSON.stringify(Object.keys(genre)).toLowerCase().includes(keyword)
            );
            setGenres(filteredGenres);
        } else {
            setGenres(JSON.parse(localStorage.getItem("genres") || "[]"))
        }
    }, [keyword, genres])

    return (
        <header className={"flex flex-col p-6 md:sticky top-0 h-screen md:w-1/3 w-full"}>
            <div>
                <h1 className={"text-sm"}>
                    <Link
                        to={"/"}
                        className={"border-b border-transparent hover:border-white"}
                    >
                        N²
                    </Link>
                </h1>
                <h2 className={"text-2xl leading-tight max-w-xs my-8"}>The fastest way to find something to watch on Netflix.</h2>
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
                    {genres.map((item) => {
                            const genreTitle = Object.keys(item)[0];
                            const genreIds = Object.values(item)[0].join();
                            return (
                                <label
                                    key={genreTitle}
                                    className={"block text-sm checkbox-container"}
                                >
                                    <input
                                        name={genreTitle}
                                        type={"checkbox"}
                                        className={"border-b border-transparent hover:border-white mr-2"}
                                        checked={props.isActive}
                                        onChange={props.handleInputChange}
                                        value={genreIds}
                                    />
                                    <span className={"checkmark"}></span>
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