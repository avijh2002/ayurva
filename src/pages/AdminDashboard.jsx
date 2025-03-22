import React, { useState } from 'react';
import Response from '../components/Response';
import Inquiries from '../components/Inquiries';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('responses');

  return (
    <div className="max-w-full mx-auto min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Welcome To Admin Dashboard</h1>
        <div className="mt-4">
          <button
            onClick={() => setActiveTab('responses')}
            className={`mr-4 p-2 rounded-lg ${activeTab === 'responses' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Responses
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`p-2 rounded-lg ${activeTab === 'inquiries' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Inquiries
          </button>
        </div>
      </div>

      <div className="p-4">
        {activeTab === 'responses' ? <Response/> : <Inquiries/>}
      </div>
    </div>
  );
};

export default AdminDashboard;
