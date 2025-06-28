const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

// Submit new complaint
router.post("/submit", async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json({ message: "Complaint submitted", complaint });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error submitting complaint", error: err.message });
  }
});

// Get all complaints
router.get("/all", async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching complaints", error: err.message });
  }
});

// Update complaint (status or answer)
router.put("/update/:id", async (req, res) => {
  try {
    const updated = await Complaint.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating complaint", error: err.message });
  }
});

module.exports = router;
