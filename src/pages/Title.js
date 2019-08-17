import React, {useState, useEffect} from 'react';
import {getTitle} from "../services/ApiData";
import Loading from "../components/Loading";
import DetailItem from "../components/DetailItem";
import {netflixUrl, trailerUrl, rottenUrl, trim, imdbUrl} from "../services/Utilities";
import Button from "../components/Button";
import PeopleItem from "../components/PeopleItem";
import Rotten from '../assets/images/rotten.svg';
import IMDb from '../assets/images/imdb.svg';

const Title = (props) => {

    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTitle(props.id).then((content) => {
            try {
                setContent(content);
                setLoading(false);
            } catch {

            }
        })
    }, [props.id]);

    return (
        loading ? (
            <Loading />
        ) : (
            <article>
                <div className={"border-b border-gray-800 py-6 flex"}>
                    <figure className={"w-2/6"}>
                        <a
                            className={"block img-wrapper title-page rounded overflow-hidden"}
                            href={netflixUrl(content.nfinfo.netflixid)}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                        >
                            <img
                                loading={"lazy"}
                                className={"w-full h-auto"}
                                src={content.nfinfo.image1}
                                alt={content.nfinfo.title}
                            />
                        </a>
                    </figure>
                    <section className={"w-4/6 pl-6 flex flex-col"}>
                        <div>
                            <h1 className={"text-2xl mb-4"}>
                                <a
                                    className={"inline-block border-b border-transparent hover:border-white"}
                                    href={netflixUrl(content.nfinfo.netflixid)}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    {content.nfinfo.title}
                                </a>
                            </h1>
                            <section className={"flex border-t border-b border-gray-900 py-3 mb-4"}>
                                {content.imdbinfo.rating &&
                                    content.imdbinfo.rating > 0 &&
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
                        <div className={"mt-auto flex flex-wrap items-center"}>
                            <Button
                                link={netflixUrl(content.nfinfo.netflixid)}
                                label={"Watch " + content.nfinfo.type}
                            />
                            <Button
                                type={"secondary"}
                                link={trailerUrl(content.nfinfo.title)}
                                label={"Watch trailer"}
                            />
                            <Button
                                type={"secondary"}
                                link={imdbUrl(content.imdbinfo.imdbid)}
                            >
                                <img
                                    src={IMDb}
                                    className={"icon-button"}
                                    alt={content.nfinfo.title + " on IMDb"}
                                />
                            </Button>
                            <Button
                                type={"secondary"}
                                link={rottenUrl(content.nfinfo.title)}
                            >
                                <img
                                    src={Rotten}
                                    className={"icon-button"}
                                    alt={"Search for " + content.nfinfo.title + " on Rotten Tomatoes"}
                                />
                            </Button>
                        </div>
                    </section>
                </div>
                <section className={"border-b border-gray-800"}>
                    {content.people.map((item) => {
                        return (
                            item.director !== undefined &&
                                item.director.length > 0 &&
                                    <PeopleItem key={item.director} label={"Director"}>
                                        {item.director.map((item) => {
                                            return (
                                                <li key={item} className={"w-1/2 pr-4"}>{item}</li>
                                            )
                                        })
                                        }
                                    </PeopleItem>
                        )
                    })
                    }
                    {content.people.map((item) => {
                        return (
                            item.creator !== undefined &&
                                item.creator.length > 0 &&
                                    <PeopleItem key={item.creator} label={"Creator(s)"}>
                                        {item.creator.map((item) => {
                                            return (
                                                <li key={item} className={"w-1/2 pr-4"}>{item}</li>
                                            )
                                        })
                                        }
                                    </PeopleItem>
                        )
                    })
                    }
                    {content.people.map((item) => {
                        return (
                            item.actor !== undefined &&
                                item.actor.length > 0 &&
                                    <PeopleItem key={item.actor} label={"Actor(s)"}>
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
                <section className={"py-6"}>
                    {content.imdbinfo.plot &&
                        <p
                            dangerouslySetInnerHTML={{__html: content.imdbinfo.plot.replace('amp;','')}}
                        />
                    }
                </section>
            </article>
        )
    )
}

export default Title;