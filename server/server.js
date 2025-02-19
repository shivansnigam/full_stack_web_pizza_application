const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");
import cors from 'cors';

app.use(cors({
  orgin:["https://fullstack-pizza.netlify.app"]
}));

//config dotenv
dotenv.config();

//connection mongodb
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

// Default route for checking API status
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server listening
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`.bgMagenta.white);
});
