import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Admin authenticated successfully!");
      onLogin(userCredential.user); // Notify parent of successful login
    } catch (error) {
      setError("Invalid email or password.");
      console.error("Authentication failed:", error.message);
    }
  };

  return (
    <div className="text-center h-[100vh] w-full flex flex-col items-center justify-center ">
      <h2 className="text-2xl text-black">Admin Login</h2>
      <form onSubmit={handleLogin} className="mt-4 w-1/2 rounded-xl  ">
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 w-full rounded-xl"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-2xl">
          Login as Admin
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
