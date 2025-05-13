import axios from "axios";

const searchImages = async (term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=m6dfGwPvs0ywEzGEmcNut8QVdT9GLOwZg06_LMMq3Z0'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })
    console.log(response)
    return response.data.results
}