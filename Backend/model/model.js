const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookschema = new Schema ({
    title:String,
    auther:String,
    content:String
})

const bookdata = mongoose.model('bookdata',bookschema)
module.exports = bookdata