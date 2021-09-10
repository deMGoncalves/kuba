'use strict'

const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const httpProxyMiddleware = require('http-proxy-middleware')
const app = express()

dotenv.config()

app.disable('x-powered-by')

app.use(express.static(path.join(__dirname, 'buckets/web/public')))

app.use('/api', httpProxyMiddleware.createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  },
  target: process.env.API_URL
}))

app.get('/*', (_request, response) =>
  response.sendFile(path.join(__dirname, 'buckets/web/public/index.html'))
)

app.listen(process.env.PORT || 5000)
