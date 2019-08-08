import React from "react";

const PeopleItem = (props) => {
    return (
        <div className={"people-item flex text-sm border-b border-gray-900 py-4"}>
            <span className={"text-gray-500"}>{props.label}</span>
            <div className={"w-4/6 pl-6 ml-auto"}>
                <ul className={"flex flex-wrap"}>
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

export default PeopleItem;