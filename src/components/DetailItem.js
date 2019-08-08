import React from 'react';

const DetailItem = (props) => {
    return (
        <div className={"w-1/3"}>
            <span className={"text-sm text-gray-500"}>{props.label}</span>
            <p>{props.item}</p>
        </div>
    )
}

export default DetailItem;