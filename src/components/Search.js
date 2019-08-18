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
            {props.keyword &&
                <button
                    className={"ml-auto focus:outline-none text-gray-500 hover:text-white transition"}
                    onClick={props.handleClearSearch}
                >
                    <svg className={"w-4 h-auto"} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M47.4142 47.4354C47.2284 47.6213 47.0077 47.7688 46.7649 47.8694C46.522 47.9701 46.2617 48.0218 45.9989 48.0218C45.736 48.0218 45.4757 47.9701 45.2328 47.8694C44.99 47.7688 44.7693 47.6213 44.5835 47.4354L31.9835 34.8354L19.3951 47.4245C19.019 47.7966 18.511 48.0047 17.982 48.0032C17.453 48.0018 16.946 47.7911 16.5719 47.417C16.1979 47.0429 15.9871 46.5359 15.9857 46.0069C15.9843 45.4779 16.1924 44.9699 16.5645 44.5938L29.1533 32.0051L16.5668 19.4186C16.2004 19.0415 15.9971 18.5353 16.0009 18.0096C16.0047 17.4838 16.2152 16.9806 16.587 16.6088C16.9587 16.2369 17.4619 16.0263 17.9877 16.0225C18.5134 16.0186 19.0196 16.2218 19.3968 16.5881L31.9838 29.1745L44.5813 16.5771C44.7663 16.3872 44.9871 16.236 45.231 16.1321C45.4749 16.0283 45.7369 15.9739 46.002 15.9722C46.2671 15.9705 46.5298 16.0214 46.7751 16.1221C47.0203 16.2227 47.2431 16.3711 47.4305 16.5585C47.6179 16.746 47.7662 16.9688 47.8668 17.2141C47.9674 17.4593 48.0183 17.7221 48.0165 17.9871C48.0147 18.2522 47.9603 18.5143 47.8564 18.7581C47.7525 19.002 47.6012 19.2228 47.4113 19.4077L34.8145 32.0051L47.4145 44.6051C47.6004 44.791 47.7478 45.0116 47.8484 45.2544C47.9489 45.4972 48.0007 45.7575 48.0007 46.0203C48.0006 46.2832 47.9488 46.5434 47.8482 46.7862C47.7476 47.029 47.6001 47.2496 47.4142 47.4354Z" fill="currentColor"/>
                    </svg>
                </button>
            }
        </div>
    )
}

export default Search;