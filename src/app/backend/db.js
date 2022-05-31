const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/peopleDB', (err) => {
    if(!err){
        console.log('DataBase Connection Successful!')
    }else{
        console.log('Error while connecting' + err)
    }
})

module.exports = mongoose;