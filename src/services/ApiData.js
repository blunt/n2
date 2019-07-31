import data from "../mocks/new";
import genres from "../mocks/genres";
// import axios from 'axios'

// const proxyUrl = '',
//     apiUrl = proxyUrl + 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get:new7:CA&p=1&t=ns&st=adv',
//     genresEndpoint = proxyUrl + 'https://unogs-unogs-v1.p.rapidapi.com/api.cgi?t=genres',
//     apiKey = '3adfd0f105mshd37f672cb2a6ef6p1cc404jsn3c93ad7906e0',
//     apiHost = 'unogs-unogs-v1.p.rapidapi.com';

// const apiConfig = {
//     headers: {
//         "X-RapidAPI-Host": apiHost,
//         "X-RapidAPI-Key": apiKey // Replace with valid key
//     },
//     params: {
//         // "daysback": "7",
//         // "countryid": "US",
//         // "page": "1",
//     }
// }

const getNew = async () => {
        // const allContent = await axios.get(apiUrl, apiConfig);
        // const content = allContent.data.ITEMS;
        const content = data.ITEMS
        return content;
}

const getGenres = async () => {
    // const allContent = await axios.get(genresEndpoint, apiConfig);
    // console.log(allContent)
    // const content = allContent.data.ITEMS;
    const content = genres.ITEMS
    return content;

}

export {getNew, getGenres}