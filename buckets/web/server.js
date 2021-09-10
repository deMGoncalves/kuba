const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const proxy = require('http-proxy-middleware').createProxyMiddleware
const app = express()

dotenv.config()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', proxy({
  changeOrigin: true,
  pathRewrite: {
    ['^/api']: '/api'
  },
  target: process.env.API_URL
}))

app.get('/*', (_request, response) =>
  response.sendFile(path.join(__dirname, 'public/index.html'))
)

app.listen(process.env.PORT, process.env.HOST)
