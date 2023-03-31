const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const ping = require('./api/ping')
const { port } = require('./config/vars')
const logger = require('./utils/logger')
const createShortUrl = require('./api/createShortUrl')
const getShortUrl = require('./api/getShortUrl')


// Initialize express
const app = express()
const PORT = port

// Common Middleware
app.use(cors())
app.use(express.json()) // JSON parsing
app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
// or
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies using qs library
app.use(helmet()) // secure apps by setting various HTTP headers

// -----------------------------------------------------------------------------
// API's
// -----------------------------------------------------------------------------
// Health Check
app.get('/', ping)
// Get Short URL
app.get('/api/shorturl/:id', getShortUrl)
// Create Short URL
app.post('/api/shorturl', createShortUrl)

// Start express on the defined port
app.listen(
    PORT,
    () => {
        console.log(`🚀 Server running on port ${PORT}`)
        logger.info(`Server started and running on ${PORT}`)
    }
)
