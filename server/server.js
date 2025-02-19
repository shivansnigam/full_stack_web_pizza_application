const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: ["https://fullstack-pizza.netlify.app"] }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ❌ `app.listen()` मत लगाओ, Vercel में यह काम नहीं करता
module.exports = app;
