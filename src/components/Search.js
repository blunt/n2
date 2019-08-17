import React from 'react';

const Search = (props) => {
    return (
        <div className={"search-field relative sticky bg-black z-10 top-0 border-b-2 border-white flex items-center"}>
            <input
                className={"w-full bg-black focus:outline-none text-sm py-4"}
                type={"text"}
                value={props.keyword}
                placeholder={"Search titles & actors"}
                onChange={e => props.keywordChange(e.target.value)}
                onKeyDown={props.handleKeyDown}
            />
        </div>
    )
}

export default Search;