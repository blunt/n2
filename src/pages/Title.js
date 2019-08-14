import React, {useState, useEffect} from 'react';
import Home from './Home.js'
import {getTitle} from "../services/ApiData";
import Loading from "../components/Loading";
import DetailItem from "../components/DetailItem";
import {netflixUrl, trailerUrl, trim} from "../services/Utilities";
import Button from "../components/Button";
import PeopleItem from "../components/PeopleItem";
import PageHeader from "../components/PageHeader";

const Title = (props) => {

    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTitle(props.match.params.id).then((content) => {
            try {
                setContent(content);
                setLoading(false);
            } catch {

            }
        })
    }, [props.match.params.id]);

    return (
        <Home>
            <PageHeader
                home={false}
            >
                {!loading &&
                    <div className={"inline-block"}>
                        <span className={"inline-block mr-1 text-gray-700"}>
                            /
                        </span>
                        {content.nfinfo.title}
                    </div>
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
                                        {content.imdbinfo.rating &&
                                            <DetailItem label={"IMDb Rating"} item={content.imdbinfo.rating}/>
                                        }
                                        {content.imdbinfo.runtime &&
                                            <DetailItem label={"Duration"} item={content.imdbinfo.runtime}/>
                                        }
                                        {content.nfinfo.released &&
                                            <DetailItem label={"Year Released"} item={content.nfinfo.released}/>
                                        }
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
                        {content.people.map((item) => {
                            return (
                                item.director !== undefined &&
                                    item.director.length > 0 &&
                                    <PeopleItem key={item.director} label={"Director"}>
                                        <li className={"w-1/2 pr-4"}>{item.director}</li>
                                    </PeopleItem>
                            )
                        })
                        }
                        {content.people.map((item) => {
                            return (
                                item.creator !== undefined &&
                                    item.creator.length > 0 &&
                                        <PeopleItem key={item.creator} label={"Creator"}>
                                            <li className={"w-1/2 pr-4"}>{item.creator}</li>
                                        </PeopleItem>
                            )
                        })
                        }
                        {content.people.map((item) => {
                            return (
                                item.actor !== undefined &&
                                    item.actor.length > 0 &&
                                        <PeopleItem key={item.actor} label={"Actors"}>
                                            {item.actor.map((item) => {
                                                return (
                                                    <li key={item} className={"w-1/2 pr-4"}>{item}</li>
                                                )
                                            })
                                            }
                                        </PeopleItem>
                            )
                        })
                        }
                    </section>
                    <section className={"pt-6 pb-12"}>
                        {content.imdbinfo.plot &&
                            <p
                                dangerouslySetInnerHTML={{__html: content.imdbinfo.plot.replace('amp;','')}}
                            />
                        }
                    </section>
                </article>
            )
            }
        </Home>
    )
}

export default Title;