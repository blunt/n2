import React from 'react';
import Breadcrumb from "./Breadcrumb";
import Search from "./Search";

const PageHeader = (props) => {
    return (
        <div className={"pt-6"}>
            <Breadcrumb home={props.home}>
                {props.children}
            </Breadcrumb>
            <Search
                keyword={props.keyword}
                keywordChange={props.setKeyword}
                handleKeyDown={props.handleKeyDown}
            />
        </div>
    )
}

export default PageHeader;