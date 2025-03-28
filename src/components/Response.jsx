import React, { useEffect, useState } from "react";
import { getResponses, deleteResponse } from "../config/addResponses"; // Import functions

const Responses = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Responses
  const fetchResponses = async () => {
    try {
      const data = await getResponses();
      setResponses(data);
    } catch (error) {
      console.error("Error fetching responses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  // Handle Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this response?");
    if (confirmDelete) {
      try {
        await deleteResponse(id);
        alert("Response deleted successfully!");
        fetchResponses(); // Refresh responses
      } catch (error) {
        console.error("Error deleting response:", error);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Responses</h2>
      {loading ? (
        <p>Loading responses...</p>
      ) : responses.length === 0 ? (
        <p>No responses found.</p>
      ) : (
        responses.map((response) => (
          <div key={response.id} className="mb-8 p-4 border rounded-lg shadow">
            <h3 className="text-lg font-semibold">Response ID: {response.id}</h3>
            <p><strong>Email:</strong> {response.email || "N/A"}</p>
            <p><strong>Mobile:</strong> {response.mobile || "N/A"}</p>
            <p><strong>Result:</strong> {response.result || "Pending"}</p>
            
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(response.id)}
              className="cursor-pointer bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 mt-4"
            >
              Delete
            </button>

            <h4 className="mt-4 font-semibold">Questions and Responses:</h4>
            {response.responses && response.responses.length > 0 ? (
              <table className="w-full border-collapse border border-gray-300 mt-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Question</th>
                    <th className="border border-gray-300 p-2">Answer</th>
                    <th className="border border-gray-300 p-2">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {response.responses.map((qna, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2">{qna.questionText}</td>
                      <td className="border border-gray-300 p-2">{qna.selectedOption}</td>
                      <td className="border border-gray-300 p-2">{new Date(qna.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">No questions answered.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Responses;
