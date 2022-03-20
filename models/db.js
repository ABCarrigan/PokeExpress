const mongoose = require('mongoose')
// connecting to mongo db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

module.exports = mongoose.connection