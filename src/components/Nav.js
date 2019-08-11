import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {getGenres} from "../services/ApiData";
import {slugify} from "../services/Utilities";


const Nav = (props) => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenres().then((content) => {
            try {
                setGenres(content);
            } catch {

            }
        })
    }, []);

    return (
        <header className={"p-6 sticky top-0 w-1/3"}>
            <h1 className={"text-sm"}>
                <Link
                    to={"/"}
                    className={"border-b border-transparent hover:border-white"}
                >
                    N²
                </Link>
            </h1>
            <h2 className={"text-2xl leading-tight max-w-xs my-8"}>The fastest way to find something to watch on Netflix.</h2>
            <nav id={"genres"}>
                {genres.slice(0,19).map((item) => {
                        const genreTitle = Object.keys(item)[0].replace('All ','');
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
            </nav>
        </header>
    )
}

export default Nav;