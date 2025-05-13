import axios from "axios";

const searchImages = async (term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=vJOjNnTHHzet-mHoGsYVu9tka_u0LNVpe79bESrDaSE'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })
    console.log(response)
    return response.data.results
}