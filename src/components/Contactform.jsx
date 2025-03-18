import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import addUser from "../config/addUser";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    await addUser(formData);
    setFormData({ name: "", email: "", subject: "" });
  };

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-6 bg-[#283618] mt-10 rounded-3xl p-6 md:p-10">
      {/* Left - Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="bg-white w-full rounded-xl p-6 shadow-lg">
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              placeholder="Subject"
              className="w-full h-[200px] p-3 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-green-500"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <button className="w-full bg-[#283618] text-white p-3 rounded-3xl hover:bg-[#3a4e2c] transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right - Contact Info Section */}
      <div className="w-full px-4 py-7 md:w-1/2 flex flex-col justify-center text-right">
        <div className="space-y-4">
          <p className="text-white text-2xl md:text-4xl font-semibold">
            Get In Touch With Us!
          </p>
          <p className="text-[#DFDFDF] text-lg md:text-xl">
            We look forward to connecting with you and discussing your wellness journey.
          </p>
          <p className="text-[#DFDFDF] text-lg md:text-xl">care@ayurva.digital</p>
          <p className="text-[#DFDFDF] text-lg md:text-xl">+91 8007968715</p>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
