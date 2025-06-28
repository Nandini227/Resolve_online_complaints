const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  title: String,
  category: String,
  date: String,
  status: { type: String, default: "Pending" },
  answer: { type: String, default: "" },
});

module.exports = mongoose.model("Complaint", complaintSchema);
