'use strict'

const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const httpProxyMiddleware = require('http-proxy-middleware')
const app = express()

dotenv.config()

app.disable('x-powered-by')

app.use(express.static(path.join(__dirname, 'public')))

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

app.get('/*', (_request, response) =>
  response.sendFile(path.join(__dirname, 'public/index.html'))
)

app.listen(process.env.PORT || 5000)
