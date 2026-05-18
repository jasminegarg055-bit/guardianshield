// import React, { useState, useEffect } from "react";
// import {useAuth} from "../pages/AuthProvider";


// export default function MyProfile() {
//   // Default user (so no signup page)
//   const auth = useAuth();

//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     isVolunteer: false,
    
//   });

//   const [form, setForm] = useState({
//     username: "",
//     email: ""
//   });
//   const [editMode, setEditMode] = useState(false);
  
//   useEffect(() => {
//     if (auth.user) {
//       setUser(auth.user);
//       setForm(auth.user);
//     }
//   }, [auth.user]);
  
//   // Handle input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
  
//   // ✅ FIXED Update Profile
//   const handleUpdate = async () => {
//     console.log("SAVE CLICKED", form);
//     try {
//       const res = await fetch("http://localhost:5000/api/user/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(form)
//       });
  
//       const updated = { ...user, ...form };

//       setUser(updated);
//       auth.setuser(updated);   
//       localStorage.setItem("user", JSON.stringify(updated));
//       setEditMode(false);
//       alert("Profile Updated ✅");
//       window.location.reload();
  
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   // // Change password
//   // const handleForgotPassword = () => {
//   //   const email = prompt("Enter your registered email:");
  
//   //   if (!email) {
//   //     alert("Email required");
//   //     return;
//   //   }
  
//   //   const storedUser = JSON.parse(localStorage.getItem("user"));
  
//   //   if (!storedUser || storedUser.email !== email) {
//   //     alert("User not found ❌");
//   //     return;
//   //   }
  
//   //   const newPass = prompt("Enter new password:");
//   //   if (!newPass) {
//   //     alert("Password required");
//   //     return;
//   //   }
  
//   //   // 🔴 SAME VALIDATION (login jaisa)
//   //   if (newPass.length < 6) {
//   //     alert("Password must be at least 6 characters");
//   //     return;
//   //   }
  
//   //   const confirmPass = prompt("Confirm password:");
//   //   if (newPass !== confirmPass) {
//   //     alert("Passwords do not match");
//   //     return;
//   //   }
  
//   //   // ✅ update password
//   //   const updated = { ...storedUser, password: newPass };
  
//   //   localStorage.setItem("user", JSON.stringify(updated));
  
//   //   alert("Password reset successful ✅");
//   // };


//   // Logout
//   const handleClick = () => {
//     auth.logout();
//   };


//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

//       <div className="card shadow p-4" style={{ width: "350px" }}>
//         <h3 className="text-center mb-3">Update Account</h3>

//         {/* Name */}
//          <input
//           type="text"
//           name="username"
//           className="form-control mb-3"
//           value={form.username || ""}
//           onChange={handleChange}
//           disabled={!editMode}   
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           className="form-control mb-3"
//           value={form.email || ""}
//           onChange={handleChange}
//           disabled={!editMode}
//         />

      

//         {/* Buttons */}
//         <div className="text-center">

//           {!editMode ? (
//             <>
//               <button
//                     className="btn btn-warning w-100 mb-2"
//                     onClick={() => {
//                       if (!editMode) {
//                         setForm(user); // fresh data load
//                       }
//                       setEditMode(!editMode);
//                     }}
//                   >
//                 {editMode ? "Cancel Edit" : "Edit Profile"}
//               </button>

//               {/* <button
//                 className="btn btn-info w-100 mb-2"
//                 onClick={handlePasswordChange}
//               >
//                 Change Password
//               </button> */}

//               <button
//                 className="btn btn-danger w-100"
//                 onClick={handleClick}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <button
//                 className="btn btn-success w-100 mb-2"
//                 onClick={handleUpdate}
//               >
//                 Save Changes
//               </button>

//               <button
//                 className="btn btn-secondary w-100"
//                 onClick={() => {
//                   setForm(user);
//                   setEditMode(false);
//                 }}
//               >
//                 Cancel
//               </button>
//             </>
//           )}

//         </div>
//       </div>

//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { useAuth } from "../pages/AuthProvider";

export default function MyProfile() {

  // Default user
  const auth = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    isVolunteer: false,
  });

  const [form, setForm] = useState({
    username: "",
    email: ""
  });

  const [editMode, setEditMode] = useState(false);

  // CHANGE PASSWORD STATES
  const [showPassword, setShowPassword] = useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // LOAD USER
  useEffect(() => {

    if (auth.user) {

      setUser(auth.user);

      setForm(auth.user);

    }

  }, [auth.user]);

  // HANDLE PROFILE INPUT
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  // HANDLE PASSWORD INPUT
  const handlePasswordInput = (e) => {

    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });

  };

  // UPDATE PROFILE
  const handleUpdate = async () => {

    console.log("SAVE CLICKED", form);

    try {

      const res = await fetch(
        "http://localhost:5000/api/user/update",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(form)
        }
      );

      const updated = { ...user, ...form };

      setUser(updated);

      auth.setuser(updated);

      localStorage.setItem(
        "user",
        JSON.stringify(updated)
      );

      setEditMode(false);

      alert("Profile Updated ✅");

      window.location.reload();

    } catch (err) {

      console.log(err);

    }

  };

  // CHANGE PASSWORD
  const handlePasswordUpdate = async () => {

    // VALIDATION
    if (
      !passwordData.oldPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {

      alert("All fields are required");

      return;

    }

    if (passwordData.newPassword.length < 6) {

      alert("Password must be at least 6 characters");

      return;

    }

    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {

      alert("Passwords do not match");

      return;

    }

    try {

      const res = await fetch(
        "http://localhost:5000/api/user/change-password",
        {

          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({

            email: user.email,

            oldPassword:
              passwordData.oldPassword,

            newPassword:
              passwordData.newPassword

          })

        }
      );

      const data = await res.json();

      if (!res.ok) {

        alert(data.message);

        return;

      }

      alert("Password Updated Successfully ✅");

      // CLOSE PASSWORD FORM
      setShowPassword(false);

      // CLEAR INPUTS
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      });

    } catch (err) {

      console.log(err);

    }

  };

  // LOGOUT
  const handleClick = () => {

    auth.logout();

  };

  return (

    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div
        className="card shadow p-4"
        style={{ width: "350px" }}
      >

        <h3 className="text-center mb-3">
          Update Account
        </h3>

        {/* NAME */}
        <input
          type="text"
          name="username"
          className="form-control mb-3"
          value={form.username || ""}
          onChange={handleChange}
          disabled={!editMode}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          value={form.email || ""}
          onChange={handleChange}
          disabled={!editMode}
        />

        {/* CHANGE PASSWORD FORM */}

        {showPassword && (

          <div className="mb-3">

            <input
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              className="form-control mb-2"
              value={passwordData.oldPassword}
              onChange={handlePasswordInput}
            />

            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="form-control mb-2"
              value={passwordData.newPassword}
              onChange={handlePasswordInput}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="form-control mb-2"
              value={passwordData.confirmPassword}
              onChange={handlePasswordInput}
            />

            <button
              className="btn btn-success w-100"
              onClick={handlePasswordUpdate}
            >
              Update Password
            </button>

          </div>

        )}

        {/* BUTTONS */}
        <div className="text-center">

          {!editMode ? (

            <>
              <button
                className="btn btn-warning w-100 mb-2"
                onClick={() => {

                  if (!editMode) {

                    setForm(user);

                  }

                  setEditMode(!editMode);

                }}
              >
                {editMode
                  ? "Cancel Edit"
                  : "Edit Profile"}
              </button>

              {/* CHANGE PASSWORD BUTTON */}

              <button
                className="btn btn-info w-100 mb-2"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                Change Password
              </button>

              {/* LOGOUT */}

              <button
                className="btn btn-danger w-100"
                onClick={handleClick}
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <button
                className="btn btn-success w-100 mb-2"
                onClick={handleUpdate}
              >
                Save Changes
              </button>

              <button
                className="btn btn-secondary w-100"
                onClick={() => {

                  setForm(user);

                  setEditMode(false);

                }}
              >
                Cancel
              </button>
            </>

          )}

        </div>

      </div>

    </div>
  );
}