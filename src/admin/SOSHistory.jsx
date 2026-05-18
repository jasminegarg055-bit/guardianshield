import { useEffect, useState } from "react";
import { stopSOS } from "../utils/sosAudio";

export default function SOSHistory() {

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/soshistory")
      .then(res => res.json())
      .then(data => setAlerts(data))
      .catch(err => console.log(err));
  }, []);

  // 🔕 STOP SOUND HERE
  useEffect(() => {
    stopSOS();   // 🔕 stop sound on page load
  }, []);

  return (
    <div className="container mt-4">

      <h2 style={{ color: "red", fontWeight: "bold" }}>
        🚨 SOS History
      </h2>

      {alerts.length === 0 ? (
        <p>No SOS alerts found</p>
      ) : (
        alerts.map((a, index) => (
          <div
            key={index}
            style={{
              borderRadius: "12px",
              padding: "15px",
              marginBottom: "20px",
              background: a.seen ? "#e6ffe6" : "#ffe6e6",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            <p><b>👤 User:</b> {a.name}</p>
            <p><b>📧 Email:</b> {a.email}</p>
            <p><b>📍 Location:</b> {a.latitude}, {a.longitude}</p>
            <p><b>⏰ Time:</b> {new Date(a.time).toLocaleString()}</p>

            <a
              href={`https://www.google.com/maps?q=${a.latitude},${a.longitude}`}
              target="_blank"
              rel="noreferrer"
            >
              📍 Open Live Location
            </a>

            <div style={{ marginTop: "10px" }}>
              <iframe
                width="100%"
                height="200"
                style={{ borderRadius: "10px", border: "none" }}
                src={`https://maps.google.com/maps?q=${a.latitude},${a.longitude}&z=15&output=embed`}
                title="map"
              ></iframe>
            </div>
          </div>
        ))
      )}
    </div>
  );
}