const express = require('express')
const bodyParser = require('body-parser')
const locationRoutes = require('./routes/location')

const app = express()

// app.set('view engine', 'ejs')
// app.set('views', 'views') // #490

// app.use(bodyParser.urlencoded({extended: false})) // parsing the request body

// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'text/html')
//     next()
// })

// app.use((req, res, next) => {
//     const userName = req.body.username || 'Unknown user'
//     res.render('index', {
//         user: userName
//     })
// })

app.use(bodyParser.json())
app.use(locationRoutes)

app.listen(3000)