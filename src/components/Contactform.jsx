import React , {useState} from "react";



const Contactform = () => {
  const [formData ,setFormData] = useState({
       name : "",
       email : "",
       subject : "",
    })
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(formData);
        setFormData(formData);
        formData.name = "";
        formData.email = "";
        formData.subject = "";
        setFormData({...formData})
    }
  return (
    <div className=" mx-auto h-[731px] max-w-[1280px] flex gap-2 bg-[#283618] mt-[64px] rounded-3xl p-8">
      <div className="flex w-1/2 items-center justify-center p-5 mx-auto  gap-2 h-full">
        <div className=" bg-white w-full rounded-xl p-4 h-full">
          <form onSubmit={submitHandler} className="flex flex-col  items-center justify-center gap-6 p-1 rounded-md mt-3 ">
            <input
              type="text"
              placeholder="Name"
              className="w-full   p-3 border border-gray-300 rounded-xl outline-none"
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full  p-3 border border-gray-300 rounded-xl outline-none"
              value={formData.email}
              onChange={(e)=>setFormData({...formData,email:e.target.value})}
            />
            <textarea
              type="text"
              placeholder="Subject"
              className="w-full h-[350px] p-3 border border-gray-300 rounded-xl outline-none"
              value={formData.subject}
              onChange={(e)=>setFormData({...formData,subject:e.target.value})}
            />
            <button className="cursor-pointer w-full border bg-[#283618] text-white p-3 rounded-3xl outline-none">
              submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 mx-auto flex flex-col p-5  h-full items-end text-right">
        <div className="mt-auto space-y-6 relative p-6">
          {" "}
          {/* This pushes everything inside it to the bottom */}
          <p className="text-white text-5xl font-semibold max-w-[390px] ml-[180px]">
            Get In Touch With Us!
          </p>
          <p className="text-[#DFDFDF] text-right text-3xl ml-[85px] max-w-[482px] ">
            We look forward to connecting with you and discuss your wellness
            journey.
          </p>
          <p className="text-[#DFDFDF] text-xl">care@ayurva.digital</p>
          <p className="text-[#DFDFDF] text-xl">+91 8007968715</p>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
