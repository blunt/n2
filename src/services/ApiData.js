import axios from 'axios'

const proxyUrl = '',
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

const getNew = async (activeCountry) => {
    const allContent = await axios.get(searchEndpoint, {
        headers: {
            "X-RapidAPI-Host": apiHost,
            "X-RapidAPI-Key": apiKey // Replace with valid key
        },
        params: {
            "q": "get:new7:" + activeCountry,
            "p": "1",
            "t": "ns",
            "st": "adv"
        }
    });
    sessionStorage.setItem("newContent" + activeCountry, JSON.stringify(allContent.data.ITEMS));
    const content = allContent.data.ITEMS;
    return content;
}

const getCountries = async () => {
    const allContent = await axios.get(searchEndpoint, {
        headers: {
            "X-RapidAPI-Host": apiHost,
            "X-RapidAPI-Key": apiKey
        },
        params: {
            "t": "lc",
            "q": "available"
        }
    });
    sessionStorage.setItem("countries", JSON.stringify(allContent.data.ITEMS));
    const content = allContent.data.ITEMS;
    return content;
}

const getResults = async (keyword, genres, activeCountry) => {
    const allContent = await axios.get(searchEndpoint, {
        headers: {
            "X-RapidAPI-Host": apiHost,
            "X-RapidAPI-Key": apiKey
        },
        params: {
            "q": keyword + "-!1900,2018-!0,5-!0,10-!" + genres + "-!Any-!Any-!Any-!gt100-!",
            "t": "ns",
            "cl": activeCountry,
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
    localStorage.setItem("genres", JSON.stringify(allContent.data.ITEMS));
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

export {getNew, getCountries, getGenres, getTitle, getResults}