import { create } from "apisauce";
import axios from 'axios';



const api = axios.create({
    baseURL: 'https://newsapi.org/v2',

})

const apiKey= '?country=us&apiKey=dbf21ffac9124dc1be6b6d1eed896489';

const getTopHeadline= () => api.get('/top-headlines'+apiKey)
const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=dbf21ffac9124dc1be6b6d1eed896489")

export default{
    getTopHeadline,
    getByCategory
}