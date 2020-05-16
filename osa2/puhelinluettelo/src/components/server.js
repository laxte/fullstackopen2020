import axios from 'axios'

const create = (baseUrl, newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const getAll = baseUrl => {
    const request = axios.get(baseUrl)
    return request.then(response => response)
}

const deletePerson = (baseUrl, id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response)
}

export default { create , getAll, deletePerson }