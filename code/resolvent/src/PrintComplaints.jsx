import React, { useEffect, useState } from "react";

const PrintComplaints = () => {
  const [data, setData] = useState([]);

  const fetchComplaints = async () => {
    const currentUser = localStorage.getItem("loggedInUser");
    if (!currentUser) {
      setData([]);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/complaints/all");
      const complaints = await res.json();

      
      const filtered = complaints.filter((c) => c.userEmail === currentUser);

      setData(filtered);
    } catch (err) {
      console.error("Failed to fetch complaints:", err);
      setData([]);
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#2c3e50",
        }}
      >
        Printable Complaint List
      </h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={handlePrint}
          style={{
            backgroundColor: "#3f51b5",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#303f9f")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#3f51b5")
          }
        >
          🖨 Print This Page
        </button>
      </div>

      {data.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "16px",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          No complaints to print.
        </p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
                <tr style={{ backgroundColor: "#607d8b", color: "#fff" }}>
                  <th style={thStyle}>Title</th>
                  <th style={thStyle}>Description</th>
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((c, index) => (
                  <tr
                    key={c._id}
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? "#ffffff" : "#f5f5f5",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#e0f7fa")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        index % 2 === 0 ? "#ffffff" : "#f5f5f5")
                    }
                  >
                    <td style={tdStyle}>{c.title}</td>
                    <td style={tdStyle}>{c.category}</td>
                    <td style={tdStyle}>{c.date}</td>
                    <td style={{ ...tdStyle, fontWeight: "bold" }}>
                      {c.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Responsive Media Queries */}
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

const thStyle = {
  padding: "12px 15px",
  textAlign: "left",
  fontSize: "16px",
};

const tdStyle = {
  padding: "10px 15px",
  borderBottom: "1px solid #ddd",
  color: "#333",
};
export default PrintComplaints;
