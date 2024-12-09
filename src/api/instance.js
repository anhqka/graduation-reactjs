import axios from "axios";

const instance = axios.create({
    baseURL : 'https://booking-baber-api.herokuapp.com/api/'
}) 

export default instance