import axios from 'axios'

const create = (baseUrl, newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get('http://localhost:3001/persons')
    return request.then(response => response)
}

export default { create , getAll }