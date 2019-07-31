import React, {useState, useEffect} from 'react';
import {getNew} from '../services/ApiData'

import Loading from "../components/Loading";
import List from "../components/List";

const Home = () => {

    const [newContent, setNewContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNew().then((content) => {
            try {
                setNewContent(content);
                setLoading(false);
            } catch {
                setLoading(false);
            }
        });
    }, []);

    return (
        <div className={"container"}>
            <div className={"mt-6"}>
                <div className={"mb-10"}>
                    Home
                </div>
                {loading ? (
                        <Loading />
                    ) : (
                        <List
                            title={"New"}
                            content={newContent}
                            page={"/"}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Home;