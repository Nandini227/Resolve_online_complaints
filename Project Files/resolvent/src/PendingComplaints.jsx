import React, { useEffect, useState } from "react";

const PendingComplaints = () => {
  const [pendingComplaints, setPendingComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const currentUser = localStorage.getItem("loggedInUser");
      if (!currentUser) return;

      try {
        const res = await fetch("http://localhost:5000/api/complaints/all");
        const data = await res.json();

        const userComplaints = data.filter(
          (item) => item.userEmail === currentUser && item.status !== "Resolved"
        );

        setPendingComplaints(userComplaints);
      } catch (err) {
        console.error("Error fetching complaints:", err);
      }
    };

    fetchComplaints();
  }, []);

  return (
<div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
  <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
    Pending Complaints
  </h2>

  {/* Responsive table wrapper */}
  <div style={{ overflowX: "auto" }}>
    {pendingComplaints.length === 0 ? (
      <p style={{ textAlign: "center", color: "black" }}>No pending complaints found.</p>
    ) : (
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: "#f9f9f9",
        }}
      >
        <table
          border="0"
          cellPadding="0"
          cellSpacing="0"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "600px", 
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#607d8b", color: "white" }}>
              <th style={{ padding: "12px 15px", textAlign: "left", fontSize: "16px" }}>Title</th>
              <th style={{ padding: "12px 15px", textAlign: "center", fontSize: "16px" }}>Description</th>
              <th style={{ padding: "12px 15px", textAlign: "left", fontSize: "16px" }}>Date</th>
              <th style={{ padding: "12px 15px", textAlign: "left", fontSize: "16px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingComplaints.map((item, index) => (
              <tr
                key={item._id || index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#f1f1f1",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0f7fa")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    index % 2 === 0 ? "#ffffff" : "#f1f1f1")
                }
              >
                <td style={{ padding: "10px 15px", borderBottom: "1px solid #ddd", color: "#333" }}>
                  {item.title}
                </td>
                <td style={{ padding: "10px 15px", borderBottom: "1px solid #ddd", color: "#333" }}>
                  {item.category}
                </td>
                <td style={{ padding: "10px 15px", borderBottom: "1px solid #ddd", color: "#333" }}>
                  {item.date}
                </td>
                <td style={{ padding: "10px 15px", borderBottom: "1px solid #ddd", color: "#333" }}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>

  {/* Add responsive CSS using <style> for narrower screens */}
  <style>
    {`
      @media (max-width: 768px) {
        table {
          font-size: 14px;
        }

        th, td {
          padding: 8px 10px !important;
        }

        h2 {
          font-size: 20px;
        }
      }

      @media (max-width: 480px) {
        table {
          font-size: 12px;
        }

        th, td {
          padding: 6px 8px !important;
        }

        h2 {
          font-size: 18px;
        }
      }
    `}
  </style>
</div>


  );
};

export default PendingComplaints;
