const mongoose = require("mongoose")
const envvar = require('envvar')

const MONGO_USERNAME = envvar.string('MONGO_USERNAME')
const MONGO_PASSWORD = envvar.string('MONGO_PASSWORD')

const mongoURI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.q1hfmt9.mongodb.net/?retryWrites=true&w=majority`
const conn = mongoose.createConnection(mongoURI)
mongoose.connect(mongoURI)

module.exports = { conn, mongoURI }