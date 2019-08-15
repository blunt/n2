import React from 'react';
import Breadcrumb from "./Breadcrumb";
import Search from "./Search";

const PageHeader = (props) => {
    return (
        <Search
            keyword={props.keyword}
            keywordChange={props.setKeyword}
            handleKeyDown={props.handleKeyDown}
        />
    )
}

export default PageHeader;