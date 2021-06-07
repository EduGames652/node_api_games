const mongoose = require("mongoose");

mongoose.connect('mongodb://root:e296cd9f@localhost:27017/api', { useMongoClient: true }, function (err) {if (err) {console.log(err)}else{console.log("MongoDB Conectado")}});
mongoose.Promise = global.Promise;

modeule.exports = mongoose;