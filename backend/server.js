const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const complaintRoutes = require("./routes/complaints");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/resolveit",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
