import React from "react";
import FramerAnimation from "./FramerAnimation";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-container">
      <div className="main-content">
        <FramerAnimation />
      </div>
      <div
  style={{
   marginTop:"-100px",
    padding: "40px 20px",
    textAlign: "center",
    width:"100%",
  }}
>
  <h2 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>
    What Makes Us Different
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "40px",
      marginTop: "20px",
    }}
  >
    <div style={{ flex: "0 0 220px" }}>
      <h3 style={{ fontSize: "22px", color: "#ec4899" }}>User Friendly</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>
        Simple interface designed for quick complaint submissions.
      </p>
    </div>
    <div style={{ flex: "0 0 220px" }}>
      <h3 style={{ fontSize: "22px", color: "#cc33ff" }}>Secure Platform</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>
        Your data is encrypted and stored safely with us.
      </p>
    </div>
    <div style={{ flex: "0 0 220px" }}>
      <h3 style={{ fontSize: "22px", color: "#ff6a00" }}>Admin Support</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>
        Dedicated admin dashboard to resolve issues efficiently.
      </p>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default Home;
