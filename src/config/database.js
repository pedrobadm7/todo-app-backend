const mongoose = require('mongoose')
mongoose.Promise =  global.Promise
const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/todo'
// module.exports =  mongoose.connect('mongodb://localhost/todo')
// module.exports =  mongoose.connect('mongodb+srv://todo:demolayg1@cluster0.xzkuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
module.exports = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})