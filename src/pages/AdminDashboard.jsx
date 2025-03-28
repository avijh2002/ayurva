import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import Response from '../components/Response';
import Inquiries from '../components/Inquiries';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('responses');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully!");
      navigate('/'); // Redirect to homepage after logout
    } catch (error) {
      console.error("Error during sign out:", error.message);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="max-w-full mx-auto min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome To Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="p-4">
        <button
          onClick={() => setActiveTab('responses')}
          className={`cursor-pointer mr-4 p-2 rounded-lg ${activeTab === 'responses' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Responses
        </button>
        <button
          onClick={() => setActiveTab('inquiries')}
          className={`cursor-pointer p-2 rounded-lg ${activeTab === 'inquiries' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Inquiries
        </button>
      </div>

      <div className="p-4">
        {activeTab === 'responses' ? <Response /> : <Inquiries />}
      </div>
    </div>
  );
};

export default AdminDashboard;
