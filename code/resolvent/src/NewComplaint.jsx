import React, { useState } from "react";

const NewComplaint = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    status: "Pending", 
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const currentUser = localStorage.getItem("loggedInUser");

  if (!currentUser) {
    alert("You must be logged in to submit a complaint.");
    return;
  }

  const complaintWithEmail = { ...formData, userEmail: currentUser };

  try {
    const res = await fetch("http://localhost:5000/api/complaints/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(complaintWithEmail),
    });

    if (res.ok) {
      alert("Complaint submitted!");
      setFormData({ title: "", category: "", date: "", status: "Pending" });
    } else {
      alert("Error submitting complaint");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to connect to server");
  }
};

  return (
    <div
  style={{
    padding: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    
  }}
>
  <div
    style={{
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "500px",
    }}
  >
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Submit a Complaint</h2>
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ fontWeight: "bold" }}>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ fontWeight: "bold" }}>Description:</label>
        <br />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ fontWeight: "bold" }}>Date:</label>
        <br />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "5px",
          }}
        />
      </div>

      <input type="hidden" name="status" value={formData.status} />
      <div style={{ textAlign: "center" }}>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit Complaint
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default NewComplaint;
