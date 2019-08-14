import React from 'react';
import Breadcrumb from "./Breadcrumb";
import Search from "./Search";

const PageHeader = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb home={props.home}>
                {props.children}
            </Breadcrumb>
            <Search
                keyword={props.keyword}
                keywordChange={props.setKeyword}
                handleKeyDown={props.handleKeyDown}
            />
        </React.Fragment>
    )
}

export default PageHeader;