import React, { useEffect, useState } from "react";
import { getInquiries, deleteInquiry } from "../config/addInquiries"; // Import functions

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const fetchInquiries = async () => {
    try {
      const data = await getInquiries();
      setInquiries(data);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this inquiry?");
    if (confirmDelete) {
      try {
        await deleteInquiry(id);
        alert("Inquiry deleted successfully!");
        fetchInquiries(); 
      } catch (error) {
        console.error("Error deleting inquiry:", error);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Inquiries</h2>
      {loading ? (
        <p>Loading inquiries...</p>
      ) : inquiries.length === 0 ? (
        <p>No inquiries found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Subject</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">{inquiry.name}</td>
                <td className="border border-gray-300 p-2">{inquiry.email}</td>
                <td className="border border-gray-300 p-2">{inquiry.subject}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleDelete(inquiry.id)}
                    className="cursor-pointer bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Inquiries;
