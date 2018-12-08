const http = require('http')
const port = 3000

function randomNumber(low, high) {
    return Math.random() * (high - low) + low
}

function makeRandomResponse() {
    return {
        mem: { Heap: randomNumber(1, 100), Sys: 4321, Stack: 203 },
        cpu: { STime: 123, UTime: 1234 },
        Threads: 2
    }
}

const requestHandler = (request, response) => {
    response.end(JSON.stringify(makeRandomResponse()))
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
