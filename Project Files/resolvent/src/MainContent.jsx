import React from "react";
import "./App.css";
import complaintsimg from "./assets/complaints.jpg";
import Resolutionimg from "./assets/Resolution.jpg";
import Historyimg from "./assets/History.jpg";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/usighn");
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Complaint Management</h1>

      <div className="card-container">
        {/* Complaints Card */}
        <div className="card">
          <h2 className="card-title">Complaints</h2>
          <img
            src={complaintsimg}
            alt="complaints"
            style={{
              width: "240px",
              height: "160px",
              marginLeft: "-20px",
              marginTop: "-10px",
            }}
          />
          <button
            className="card-button"
            onClick={() => navigate("/new-complaint")}
          >
            + New Complaint
          </button>
          <button
            className="card-button"
            onClick={() => navigate("/pending-complaint")}
          >
            Pending
          </button>
        </div>

        {/* Resolution Card */}
        <div className="card">
          <h2 className="card-title">Resolution</h2>
          <img
            src={Resolutionimg}
            alt="resolution"
            style={{
              width: "230px",
              height: "160px",
              marginLeft: "-20px",
              marginTop: "-10px",
            }}
          />
          <button
            className="card-button"
            onClick={() => navigate("/in-progress")}
          >
            In Progress
          </button>
          <button className="card-button" onClick={() => navigate("/resolved")}>
            Resolved
          </button>
        </div>

        {/* History Card */}
        <div className="card">
          <h2 className="card-title">History</h2>
          <img
            src={Historyimg}
            alt="history"
            style={{
              width: "230px",
              height: "160px",
              marginLeft: "-20px",
              marginTop: "-10px",
            }}
          />
          <button className="card-button" onClick={() => navigate("/view-all")}>
            View All
          </button>
          <button className="card-button" onClick={() => navigate("/print")}>
            Print
          </button>
        </div>
      </div>
     <div style={{ textAlign: "center", marginTop: "30px"}}>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
    </div>
  );
};

export default MainContent;
