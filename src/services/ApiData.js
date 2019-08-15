import axios from 'axios'

const proxyUrl = '',
    apiUrl = proxyUrl + 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get:new7:CA&p=1&t=ns&st=adv',
    genresEndpoint = proxyUrl + 'https://unogs-unogs-v1.p.rapidapi.com/api.cgi?t=genres',
    searchEndpoint = proxyUrl + 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
    apiKey = '3adfd0f105mshd37f672cb2a6ef6p1cc404jsn3c93ad7906e0',
    apiHost = 'unogs-unogs-v1.p.rapidapi.com';

const apiConfig = {
    headers: {
        "X-RapidAPI-Host": apiHost,
        "X-RapidAPI-Key": apiKey // Replace with valid key
    },
    params: {
        // "daysback": "7",
        "countryid": "CAD"
        // "page": "1",
    }
}

const getNew = async () => {
        const allContent = await axios.get(apiUrl, apiConfig);
        sessionStorage.setItem("newContent", JSON.stringify(allContent.data.ITEMS));
        const content = allContent.data.ITEMS;
        return content;
}

const getResults = async (keyword, genres) => {
    const allContent = await axios.get(searchEndpoint, {
        headers: {
            "X-RapidAPI-Host": apiHost,
            "X-RapidAPI-Key": apiKey
        },
        params: {
            "q": keyword + "-!1900,2018-!0,5-!0,10-!" + genres + "-!Any-!Any-!Any-!gt100-!{downloadable}",
            "t": "ns",
            "cl": "all",
            "st": "adv",
            "ob": "Relevance",
            "p": "1",
            "sa": "and"
        }
    });
    const content = allContent.data.ITEMS;
    return content;
}

const getGenre = async (genreIds) => {
    const allContent = await axios.get(searchEndpoint, {
        headers: {
            "X-RapidAPI-Host": apiHost,
            "X-RapidAPI-Key": apiKey
        },
        params: {
            "q": "-!1900,2018-!0,5-!0,10-!" + genreIds + "-!Any-!Any-!Any-!gt100-!{downloadable}",
            "t": "ns",
            "cl": "all",
            "st": "adv",
            "ob": "Relevance",
            "p": "1",
            "sa": "and"
        }
    });
    const content = allContent.data.ITEMS;
    return content;
}

const getGenres = async () => {
    const allContent = await axios.get(genresEndpoint, apiConfig);
    sessionStorage.setItem("genres", JSON.stringify(allContent.data.ITEMS));
    const content = allContent.data.ITEMS;
    return content;

}

const getTitle = async (id) => {
    const allContent = await axios.get(searchEndpoint, {
        headers: {
            "X-RapidAPI-Host": apiHost,
            "X-RapidAPI-Key": apiKey
        },
        params: {
            "t": "loadvideo",
            "q": id
        }
    });
    const content = allContent.data.RESULT;
    return content;
}

export {getNew, getGenres, getTitle, getResults, getGenre}