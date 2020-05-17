module.exports= function(app){
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://nathan:nathan1995@localhost:27017/node-manager',{
        useNewUrlParser:true,
        useFindAndModify:false
     })
}