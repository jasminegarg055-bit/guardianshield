import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { playSOS } from "../utils/sosAudio";

export default function Dashboard() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [counts, setcounts] = useState({
    blogCount: 0,
    contactCount: 0,
    userCount: 0,
    supportCount: 0,
    volunteerCount: 0,
    jobCount:0,
    donation:0
  });

  const [alertCount, setAlertCount] = useState(0);
  const [hasNewAlert, setHasNewAlert] = useState(false);

  // 📊 Fetch counts
  useEffect(() => {
    fetch("http://localhost:5000/api/getcount")
      .then(res => res.json())
      .then(data => setcounts(data))
      .catch(err => console.log(err));
  }, []);

  // 🚨 SOCKET
  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("newSOS", (data) => {
      console.log("📡 SOS RECEIVED:", data);
      setAlertCount(prev => prev + 1);
      setHasNewAlert(true);
    });

    return () => socket.disconnect();
  }, []);

  const cards = [
    { label: "Contacts", counts: counts.contactCount, bg: "#6f42c1" },
    { label: "Blogs", counts: counts.blogCount, bg: "#e83e8c" },
    { label: "Users", counts: counts.userCount, bg: "#6f42c1" },
    { label: "SupportTeam", counts: counts.supportCount, bg: "#e83e8c" },
    { label: "Volunteers", counts: counts.volunteerCount, bg: "#6f42c1" },
    { label: "Jobs", counts: counts.jobCount, bg: "#e83e8c" },
    { label: "Donation", counts: counts.donationCount, bg: "#6f42c1" }


  ];

  return (
    <>
      <h2>Welcome to Admin Panel</h2>

      {/* 🚨 ALERT BUTTON */}
      <div style={{ position: "absolute", top: "20px", right: "30px" }}>
        <button
         onClick={() => {

          setHasNewAlert(false);
        
          // 🔊 ADMIN ONLY
          if (user && user.role === "admin") {
            playSOS();   // ✅ reliable
          }
        
          navigate("/soshistory");
        }}
        
          style={{
            padding: "12px 25px",
            background: hasNewAlert ? "red" : "gray",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            animation: hasNewAlert ? "blink 1s infinite" : "none",
            boxShadow: hasNewAlert ? "0 0 15px red" : "none"
          }}
        >
          🚨 Alerts ({alertCount})
        </button>
      </div>

      {/* 📊 CARDS */}
      <div className="row mt-5">
        {cards.map((item, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div
              className="text-center text-white p-4"
              style={{ background: item.bg, borderRadius: "12px" }}
            >
              <h1>{item.counts}</h1>
              <hr />
              <h3>{item.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}