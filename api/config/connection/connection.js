const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017', { 
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}, function (err) {
    if (err) {
      console.log(err)
  } else {
      console.log(`[+] MongoDB Conectado | URL: http://localhost:27017`)
  }
});

module.exports = mongoose;