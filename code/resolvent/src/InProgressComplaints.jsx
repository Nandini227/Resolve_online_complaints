import React, { useEffect, useState } from "react";

const InProgressComplaints = () => {
  const [inProgress, setInProgress] = useState([]);

  const fetchComplaints = async () => {
    const currentUser = localStorage.getItem("loggedInUser");
    if (!currentUser) return;

    try {
      const res = await fetch("http://localhost:5000/api/complaints/all");
      const data = await res.json();

      const filtered = data.filter(
        (item) =>
          item.status === "In Progress" &&
          item.userEmail === currentUser &&
          item.answer
      );

      setInProgress(filtered);
    } catch (err) {
      console.error("Failed to fetch complaints", err);
    }
  };

  useEffect(() => {
    fetchComplaints();

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        fetchComplaints();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const markResolved = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/complaints/update/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "Resolved" }),
        }
      );

      if (res.ok) {
        alert("Marked as Resolved");
        fetchComplaints(); // Refresh
      } else {
        alert("Failed to update complaint");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("Server error while updating");
    }
  };

  return (
   <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#2c3e50",
          fontSize: "26px",
        }}
      >
        In Progress Complaints
      </h2>

      {inProgress.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "16px",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          No in-progress complaints.
        </p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              backgroundColor: "#f9f9f9",
              minWidth: "650px",
            }}
          >
            <table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#607d8b", color: "white" }}>
                  {[
                    "Title",
                    "Description",
                    "Date",
                    "Status",
                    "Admin Response",
                    "Mark as Resolved",
                  ].map((head, index) => (
                    <th
                      key={index}
                      style={{
                        padding: "12px 15px",
                        textAlign: "left",
                        fontSize: "16px",
                      }}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {inProgress.map((item, index) => (
                  <tr
                    key={item._id}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#ffffff" : "#f1f1f1",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#e0f7fa")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        index % 2 === 0 ? "#ffffff" : "#f1f1f1")
                    }
                  >
                    <td style={tdStyle}>{item.title}</td>
                    <td style={tdStyle}>{item.category}</td>
                    <td style={tdStyle}>{item.date}</td>
                    <td style={tdStyle}>{item.status}</td>
                    <td
                      style={{
                        ...tdStyle,
                        color: item.answer ? "#2e7d32" : "#999",
                      }}
                    >
                      {item.answer || "No response yet"}
                    </td>
                    <td style={tdStyle}>
                      <button
                        onClick={() => markResolved(item._id)}
                        style={buttonStyle}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#43a047")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "#4CAF50")
                        }
                      >
                        Mark Resolved
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          table {
            font-size: 14px;
          }
          th, td {
            padding: 8px 10px !important;
          }
          h2 {
            font-size: 22px !important;
          }
          button {
            font-size: 12px !important;
            padding: 6px 10px !important;
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
            font-size: 18px !important;
          }
        }
      `}</style>
    </div>
  );
};

// Table cell style
const tdStyle = {
  padding: "10px 15px",
  borderBottom: "1px solid #ddd",
  color: "#333",
};

// Button style
const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "#fff",
  padding: "6px 12px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
};


export default InProgressComplaints;
