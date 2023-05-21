import axios from "axios";


export const tvShowApi = axios.create({
    baseURL: 'https://www.episodate.com/api'
})

// export default tvShowApi