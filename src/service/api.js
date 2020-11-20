import axios from 'axios'

const api = axios.create({
    baseURL: 'https://wifindoor.herokuapp.com/'
})

export default api;