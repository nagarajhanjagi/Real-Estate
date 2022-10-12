import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '5adebd6ac3msh1375692809c0822p1c4614jsn43641c09ee54',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}