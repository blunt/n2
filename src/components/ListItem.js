import React from 'react';
import {Link} from "react-router-dom";
import {slugify} from "../services/Utilities"


const ListItem = (props) => {
    const netflixUrl = (id) => {
        return "https://www.netflix.com/watch/" + id
    }

    const item_url = "/title/" + slugify(props.item.title);

    const trim = (s) => {
        const n = s.indexOf('<');
        s = s.substring(0, n !== -1 ? n : s.length);
        return s
    }

    let listClasses = "flex pb-4 border-b"

    if (props.index !== props.length) {
        listClasses += " mb-4 border-gray-900"
    } else {
        listClasses += " border-white"
    }

    return (
        <article
            key={props.item.netflixid}
            className={listClasses}
        >
            <figure className={"w-1/5"}>
                <Link to={item_url}>
                    <img
                        className={"w-full h-auto rounded"}
                        src={props.item.image} alt={props.item.title}
                    />
                </Link>
            </figure>
            <figcaption className={"w-4/5 ml-4 flex flex-col"}>
                <Link to={item_url}>
                    <h3
                        className={"text-xl font-semibold mb-2"}
                        dangerouslySetInnerHTML={{__html: props.item.title}}
                    />
                </Link>
                <div className={"flex flex-grow"}>
                    <div className={"flex flex-col pr-8"}>
                        <p
                            className={"mb-4 opacity-50 leading-tight"}
                            dangerouslySetInnerHTML={{__html: trim(props.item.synopsis)}}
                        />
                        <a
                            className={"block mb-1 mt-auto mr-auto border-b hover:border-transparent"}
                            href={netflixUrl(props.item.netflixid)}
                        >
                            Watch {props.item.type}
                        </a>
                    </div>
                    <div className={"text-right opacity-50 leading-tight"}>
                        {props.item.rating > 0 &&
                            <p>{props.item.rating}</p>
                        }
                        {props.item.runtime &&
                            <p>{props.item.runtime}</p>
                        }
                        {props.item.released &&
                            <p>{props.item.released}</p>
                        }
                    </div>
                </div>
            </figcaption>
        </article>
    )
}

export default ListItem;