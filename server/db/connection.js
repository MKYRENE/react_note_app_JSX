const mongoose = require('mongoose');
const is_prod = process.env.PORT;

mongoose.connect(is_prod ? process.env.MONGODB_URL : 'mongodb://127.0.0.1:27017/react_note_api_db');

module.exports = mongoose.connection;