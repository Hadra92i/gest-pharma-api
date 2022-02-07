const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pharma_db',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Connection To Mongo DB Successfully Established");
        else console.log("Connection error : ", err);
    });