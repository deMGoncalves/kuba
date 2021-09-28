'use strict'

const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')

dotenv.config()

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

client.connect((_erro) => {
  // const collection = client.db('ecomm').collection('home')
  // client.close()
})
