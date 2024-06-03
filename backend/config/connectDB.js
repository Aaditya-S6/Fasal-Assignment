const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Fasal_Movie");
    console.log(`Connected to MongoDB successfully`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
