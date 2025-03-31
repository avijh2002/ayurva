import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import Response from '../components/Response';
import Inquiries from '../components/Inquiries';
import { getVisitorCount } from '../config/fetchVisitorsCount';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('responses');
  const [visitorCount, setVisitorCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchVisitorCount();
  }, []);

  const fetchVisitorCount = async () => {
    const count = await getVisitorCount();
    setVisitorCount(count);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully!");
      navigate('/');
    } catch (error) {
      console.error("Error during sign out:", error.message);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="max-w-full mx-auto min-h-screen bg-gray-100">
      {/* Header */}
      <div className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome To Admin Dashboard</h1>
        <div>
          <span className="mr-4 text-gray-600">Total Visitors: {visitorCount}</span>
          <button
            onClick={handleLogout}
            className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
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

      {/* Content */}
      <div className="p-4">
        {activeTab === 'responses' ? <Response /> : <Inquiries />}
      </div>
    </div>
  );
};

export default AdminDashboard;
