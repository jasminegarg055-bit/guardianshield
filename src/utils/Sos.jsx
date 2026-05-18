export const SOS = () => {

  // 🔴 CONFIRM FIRST
  const confirmSOS = window.confirm("⚠️ Are you sure you want to send SOS alert?");

  if (!confirmSOS) {
    return; // ❌ user cancelled
  }

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first");
    return;
  }

  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {

      if (navigator.vibrate) {
        navigator.vibrate([300, 100, 300]);
      }

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const address = `Lat: ${lat}, Lng: ${lng}`;

      const data = {
        userId: user.id,
        name: user.username,
        email: user.email,
        latitude: lat,
        longitude: lng,
        address,
        time: new Date()
      };

      fetch("http://localhost:5000/sos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      alert("🚨 SOS Sent!");

    },
    () => {
      alert("Location access denied");
    }
  );
};