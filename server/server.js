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

// Default route for checking API status
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ❌ यह remove करो (Vercel में app.listen() की जरूरत नहीं होती)
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`.bgMagenta.white);
// });

// ✅ Export करो Vercel के लिए
module.exports = app;
