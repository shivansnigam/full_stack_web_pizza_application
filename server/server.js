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

// Default API route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ❌ `app.listen()` हटाओ क्योंकि Vercel serverless है  
module.exports = app;  // ✅ Vercel को Export करके दो
