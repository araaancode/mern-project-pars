const mongoose = require('mongoose')
const colors = require("colors")

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb://127.0.0.1:27017/parsdb")

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB