import React from 'react';
import {netflixUrl, trim} from "../services/Utilities"
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
                <div onClick={props.handleTitle}>
                    <img
                        data-id={props.item.netflixid}
                        className={"w-full h-auto rounded cursor-pointer"}
                        src={props.item.image} alt={props.item.title}
                    />
                </div>
            </figure>
            <figcaption className={"w-4/5 ml-4 flex flex-col"}>
                <div onClick={props.handleTitle}>
                    <h3
                        data-id={props.item.netflixid}
                        className={"text-xl font-semibold mb-2 border-b border-transparent inline-block hover:border-white cursor-pointer"}
                        dangerouslySetInnerHTML={{__html: props.item.title}}
                    />
                </div>
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
                                handleTitle={props.handleTitle}
                                dataId={props.item.netflixid}
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