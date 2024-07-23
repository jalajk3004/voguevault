require('dotenv').config();
console.log("MONGO_URI:", process.env.MONGO_URI); // Debug statement

const mongoose = require("mongoose");

const connectDb = handler => async (req, res) => {
  if (mongoose.connection.readyState) {
    return handler(req, res);
  }
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return handler(req, res);
};

export default connectDb;
