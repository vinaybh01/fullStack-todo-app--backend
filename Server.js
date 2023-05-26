const express = require("express");
const app = express();
const connectDB = require("./config/db");
const routes = require("./routes/todolist");
const cors = require("cors");
const PORT = 3500 || process.env.PORT;

app.use(express.json());
app.use(cors());

//Connecting to mongoDB
connectDB();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
