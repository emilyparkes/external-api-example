import request from 'superagent'

// API easy and free
export function getDog() {
    return request 
    .get('https://random.dog/woof.json')
    .then(resp => {
        return resp.body
    })
}

// API with key
// const apiKey = 'bNavPaJ5EZgxfykRrdeQt74jKmNPE2ONRozVT43t'
export function getAPOD() {
    return request 
    .get(`https://api.nasa.gov/planetary/apod?date=2020-02-21&api_key=bNavPaJ5EZgxfykRrdeQt74jKmNPE2ONRozVT43t`)
    .then(resp => {
        return resp.body
    })
}

// API with cors not set up
export function getSurprise() {
    return request 
    .get('http://localhost:3000/api/v1/fun')
    .then(resp => {
        return resp.body
    })
}

