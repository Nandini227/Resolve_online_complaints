import React from "react";
import { motion } from "framer-motion";
import complaintImage from "./assets/homecomplaints.jpg"; // Make sure path is correct

const animatedText = "COMPLAINTS       HERE...";

const waveItem = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function WavyLines() {
  return (
    <div
      style={{
        marginTop:"-40px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        gap: "60px",
        flexWrap: "nowrap", // Ensure image stays beside text
      }}
    >
      {/* Text Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "flex-start",
          maxWidth: "600px",
        }}
      >
        <div
          style={{
           fontSize: "clamp(2rem, 5vw, 4.5rem)",

            background: "linear-gradient(to right,#ff66cc,#cc33ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WE RESOLVE
        </div>

        <div
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",

            background: "linear-gradient(to right,#ec4899,#fbcfe8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginLeft:"110px"
          }}
        >
          YOUR
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",

            gap: "4px",
          }}
        >
          {animatedText.split("").map((char, idx) => (
            <motion.span
              key={idx}
              variants={waveItem}
              animate="animate"
              style={{
                background: "linear-gradient(to right,#ff6a00,#ff0080)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <img
        src={complaintImage}
        alt="Complaint illustration"
        style={{
          maxWidth: "450px",
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
