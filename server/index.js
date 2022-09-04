require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const movieRoutes = require("./routes/movies");
const cors = require("cors");
const app = express();

connectDB()

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend running on ${port}...`));
