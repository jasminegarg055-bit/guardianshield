import React, { useEffect, useState } from "react";

export default function Donation() {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAmount: 0
  });

  const target = 1000000;
  const progress = (stats.totalAmount / target) * 100;

  useEffect(() => {
    fetch("http://localhost:5000/api/donations")
      .then(res => res.json())
      .then(res => setData(res.donations))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.log(err));
  }, []);

  

  return (
    <div className="container mt-4">

      <h3 className=" mb-3">Donations List 💰</h3>

      {/* ✅ STATS */}
      <h5 className="text-center">
        👥 Total Users: {stats.totalUsers} | 💰 Total Raised: ₹{stats.totalAmount}
      </h5>

      {/* ✅ PROGRESS BAR */}
      <div className="text-center mb-4 mt-3">
        <h6>🎯 Target: ₹10,00,000</h6>

        <div className="progress" style={{ height: "25px" }}>
          <div
            className="progress-bar bg-success"
            style={{ width: `${progress}%` }}
          >
            {Math.round(progress)}%
          </div>
        </div>

        <p className="mt-2">
          ₹{stats.totalAmount} raised so far
        </p>
      </div>

      {/* TABLE */}
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Donate</th>
            <th>Country</th>
            <th>Payment</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>₹{item.amount}</td>
              <td>{item.country}</td>
              <td>{item.paymentMethod}</td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}