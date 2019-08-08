import React from 'react';
import ListItem from "./ListItem";
import {Link} from "react-router-dom";


const List = (props) => {
    return (
        <section className={"mb-12"}>
            <header className={"sticky top-0 mb-4 border-b border-gray-800 bg-black z-10 text-xs"}>
                <div className={"border-t-2 border-white py-4 flex"}>
                    <h2>{props.title}</h2>
                    {props.page &&
                        <Link
                            className={"ml-auto border-b border-transparent hover:border-white"}
                            to={props.page}
                        >
                            View all
                        </Link>
                    }
                </div>
            </header>
            <section>
                {props.content.map((item, index) => (
                        <ListItem
                            length={props.content.length}
                            index={index + 1}
                            key={item.netflixid}
                            item={item}
                        />
                    )
                )}
            </section>
        </section>
    )
}

export default List;