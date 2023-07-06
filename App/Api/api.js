import axios from "axios"; 


const URL = 'https://api.themoviedb.org/3' ;
const ApiKey = 'api_key=de473025ee2ee108e66b9fcf295c1594';

export const GetPopularMovie = async() => {
   const response = await axios.get(`${URL}/movie/popular?${ApiKey}`) ;
   return response.data.results
}

export const UpcomingMovie = async () => {
    const response = await axios.get(`${URL}/movie/upcoming?${ApiKey}`) ;
    return response.data.results
}

export const GetPopularTv = async () => {
    const response = await axios.get(`${URL}/tv/popular?${ApiKey}`) ;
    return response.data.results
}