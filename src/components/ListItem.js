import React from 'react';
import {Link} from "react-router-dom";
import {netflixUrl, trailerUrl, trim} from "../services/Utilities"
import Button from "./Button";


const ListItem = (props) => {

    const item_url = "/title/" + props.item.netflixid;

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
                        className={"text-xl font-semibold mb-2 border-b border-transparent inline-block hover:border-white"}
                        dangerouslySetInnerHTML={{__html: props.item.title}}
                    />
                </Link>
                <div className={"flex flex-grow"}>
                    <div className={"flex flex-col pr-8"}>
                        <p
                            className={"mb-4 text-gray-500 leading-tight text-sm"}
                            dangerouslySetInnerHTML={{__html: trim(props.item.synopsis)}}
                        />
                        <div className={"mt-auto"}>
                            <Button
                                link={netflixUrl(props.item.netflixid)}
                                label={"Watch " + props.item.type}
                            />
                            <Button
                                type={"secondary"}
                                linkType={"link"}
                                link={item_url}
                                label={"Learn more"}
                            />
                        </div>
                    </div>
                    <div className={"text-right text-gray-500 leading-tight text-sm"}>
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