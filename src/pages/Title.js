import React, {useState, useEffect} from 'react';
import Loading from "../components/Loading";
import {Redirect} from "react-router-dom";
import {getResults, getTitle} from "../services/ApiData";
import DetailItem from "../components/DetailItem";
import {netflixUrl, trim, trailerUrl} from "../services/Utilities";
import Button from "../components/Button";
import PeopleItem from "../components/PeopleItem";
import ListItem from "../components/ListItem";
import Breadcrumb from "../components/Breadcrumb";
import PageHeader from "../components/PageHeader";
import Home from "./Home";

const Title = (props) => {

    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState("");
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        getTitle(props.match.params.id).then((content) => {
            try {
                setContent(content);
                setLoading(false);
            } catch {

            }
        })
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (keyword === "") {
                setSearching(false);
            } else {
                setSearching(true);
            }
        }
    }

    return (
        !searching ? (
            <div className={"container"}>
                <div>
                    <PageHeader
                        home={false}
                        keyword={keyword}
                        handleKeyDown={handleKeyDown}
                        setKeyword={setKeyword}
                    >
                        <span className={"mr-1 text-gray-800"}>/</span>
                        {!loading && (
                                content.nfinfo.title
                            )
                        }
                    </PageHeader>
                    {loading ? (
                            <Loading />
                        ) : (
                            <article>
                                <div className={"border-t-2 border-white pt-6"}>
                                    <div className={"border-b border-gray-800 pb-6 flex"}>
                                        <figure className={"w-2/6"}>
                                            <img
                                                className={"rounded w-full h-auto"}
                                                src={content.nfinfo.image1}
                                                alt={content.nfinfo.title}
                                            />
                                        </figure>
                                        <section className={"w-4/6 pl-6 flex flex-col"}>
                                            <div>
                                                <h1 className={"text-2xl mb-4"}>{content.nfinfo.title}</h1>
                                                <section className={"flex border-t border-b border-gray-900 py-3 mb-4"}>
                                                    <DetailItem label={"IMDb Rating"} item={content.imdbinfo.rating}/>
                                                    <DetailItem label={"Duration"} item={content.nfinfo.runtime}/>
                                                    <DetailItem label={"Year Released"} item={content.nfinfo.released}/>
                                                </section>
                                                <p
                                                    dangerouslySetInnerHTML={{__html: trim(content.nfinfo.synopsis)}}
                                                />
                                            </div>
                                            <div className={"mt-auto"}>
                                                <Button
                                                    link={netflixUrl(content.nfinfo.netflixid)}
                                                    label={"Watch " + content.nfinfo.type}
                                                />
                                                <Button
                                                    type={"secondary"}
                                                    link={trailerUrl(content.nfinfo.title)}
                                                    label={"Watch trailer"}
                                                />
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <section className={"border-b border-gray-800"}>
                                    <PeopleItem label={"Director"}>
                                        {content.people.map((item) => {
                                                return (
                                                    item.director &&
                                                        <li className={"w-1/2 pr-4"}>{item.director}</li>
                                                )
                                            })
                                        }
                                    </PeopleItem>
                                    <PeopleItem label={"Creator"}>
                                        {content.people.map((item) => {
                                                return (
                                                    item.creator &&
                                                        <li className={"w-1/2 pr-4"}>{item.creator}</li>
                                                )
                                            })
                                        }
                                    </PeopleItem>
                                    <PeopleItem label={"Actors"}>
                                        {content.people.map((item) => {
                                                return (
                                                    item.actor &&
                                                       item.actor.map((item) => {
                                                                return (
                                                                    <li className={"w-1/2 pr-4"}>{item}</li>
                                                                )
                                                            })

                                                )
                                            })
                                        }
                                    </PeopleItem>
                                </section>
                                <section className={"pt-6 pb-12"}>
                                    <p
                                        dangerouslySetInnerHTML={{__html: content.imdbinfo.plot.replace('amp;','')}}
                                    />
                                </section>
                            </article>
                        )
                    }
                </div>
            </div>
        ) : (
            <Redirect
                to={{
                    pathname: '/',
                    state: {keyword: keyword}
                }}
            />
        )
    )
}

export default Title;