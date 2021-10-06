'use strict'

const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const httpProxyMiddleware = require('http-proxy-middleware')
const app = express()

dotenv.config({
  path: '../../.env'
})

app.disable('x-powered-by')

app.use(express.static(path.join(__dirname, process.env.PUBLIC)))

app.use('/api', httpProxyMiddleware.createProxyMiddleware({
  changeOrigin: true,
  onProxyReq: (proxy) => {
    proxy.setHeader('Authorization', `Basic ${Buffer.from(process.env.PRESTASHOP_API_KEY).toString('base64')}`)
    proxy.setHeader('Output-Format', 'JSON')
  },
  pathRewrite: {
    '^/api': '/'
  },
  target: process.env.PRESTASHOP_API_URL
}))

app.get('/@analyzer', (_request, response) =>
  response.sendFile(path.join(__dirname, process.env.PUBLIC, 'report.html'))
)

app.get('/*', (_request, response) =>
  response.sendFile(path.join(__dirname, process.env.PUBLIC, 'index.html'))
)

app.listen(process.env.PORT || 5000)
