import React from 'react';

const Search = (props) => {
    return (
        <input
            className={"sticky top-0 w-full bg-black focus:outline-none text-sm py-4 border-b-2 border-white"}
            type={"text"}
            value={props.keyword}
            placeholder={"Search titles, genres, actors"}
            onChange={e => props.keywordChange(e.target.value)}
            onKeyDown={props.handleKeyDown}
        />
    )
}

export default Search;