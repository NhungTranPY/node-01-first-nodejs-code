const http = require('http')

const server = http.createServer((request, response) => {
    let body = []
    // console.log(request.method, request.url);
    request.on('data',(chunk) => {
        body.push(chunk)
    })
    request.on('end', () => {
        body = Buffer.concat(body).toString()
        console.log(body); // username=Nina (if enter Nina)
        let userName = 'Unknown user'
        if (body) {
            userName = body.split('=')[1] // split at = and take the second argument
        }
        response.setHeader('Content-Type', 'text/html')
        response.write(
            `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
        )
        response.end()
    })

    
})
server.listen(3000)