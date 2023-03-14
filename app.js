const http = require('http')

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.write('<H1>Hello there</H1>')
    response.end()
})
server.listen(3000)