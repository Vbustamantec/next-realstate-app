import axios from "axios";

export const baseUrl ="https://bayut.p.rapidapi.com"


export const fetchApi = async(url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'e2471dfb99mshd883609e942ef11p130145jsn372697a05be7'
        }
    })

    return data
}