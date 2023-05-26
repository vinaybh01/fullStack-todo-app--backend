const MONGO_URI =
  "mongodb+srv://user_1:user1@cluster0.cidqadh.mongodb.net/todolist?retryWrites=true&w=majority";

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
