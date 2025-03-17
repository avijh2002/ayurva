import React, { useState } from "react";
import { collection,addDoc } from "firebase/firestore";
import addUser from "../config/addUser";

const Contactform = () => {
  const [formData ,setFormData] = useState({
       name : "",
       email : "",
       subject : "",
    })
    const submitHandler = async (e) =>{
        e.preventDefault()
        console.log(formData);
        setFormData(formData);
        await addUser(formData);
        formData.name = "";
        formData.email = "";
        formData.subject = "";
        setFormData({...formData})
    }
   
  return (
    <div className="mx-auto  max-w-[1280px] flex flex-col md:flex-row gap-2 bg-[#283618] mt-[64px] rounded-3xl p-6 md:p-8">
      {/* Left - Form Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-5 mx-auto gap-2 h-full">
        <div className="bg-white w-full rounded-xl p-4 h-full shadow-lg">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center gap-6 p-1 rounded-md mt-3"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              placeholder="Subject"
              className="w-full h-[350px] p-3 border border-gray-300 rounded-xl outline-none resize-none focus:ring-2 focus:ring-green-500"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
            <button className="cursor-pointer w-full border bg-[#283618] text-white p-3 rounded-3xl outline-none hover:bg-[#3a4e2c] transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right - Contact Info Section */}
      <div className="w-full md:w-1/2 mx-auto flex flex-col p-5  items-end text-right">
        <div className="mt-auto space-y-6 relative p-6">
          <p className="text-white text-3xl md:text-5xl font-semibold max-w-[390px] md:ml-[180px]">
            Get In Touch With Us!
          </p>
          <p className="text-[#DFDFDF] text-lg md:text-3xl text-right md:ml-[85px] max-w-[482px]">
            We look forward to connecting with you and discussing your wellness
            journey.
          </p>
          <p className="text-[#DFDFDF] text-lg md:text-xl">
            care@ayurva.digital
          </p>
          <p className="text-[#DFDFDF] text-lg md:text-xl">+91 8007968715</p>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
