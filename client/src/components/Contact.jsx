import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

const Contact = ({setShowModal,setContacts}) => {
  const [data, setData] = useState({ Name: "", Email: "", Phone: null, Message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    try {
      const res = await axios.post('https://sheetdb.io/api/v1/dswjg6abk4yx7', data);
      console.log(res)
      if (res.status === 201) {
        const res = await axios.get('https://sheetdb.io/api/v1/dswjg6abk4yx7');
        setContacts(res.data);
        setShowModal(false)
        toast.success("Your message has been sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
      setData({ Name: "", Email: "", Phone: null, Message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    }
    setLoading(false);
  }

  return (
    <div className="bg-black h-[100vh] block inset-0 fixed bg-opacity-30 backdrop-blur-sm z-40">
      <Toaster />
      <div className="text-center border border-gray-500 rounded-lg transition-shadow shadow-gray-200 lg:w-[40%]% md:w-[45%] sm:[80%] p-2 px-6 m-auto my-40 bg-black">
      <button className="float-right rounded-full" onClick={()=>setShowModal(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
      </button>
        <h1 className="text-3xl font-bold text-white m-6">Contact Me</h1>
        <input type="text" className="m-1 w-full bg-black border-gray-400 text-gray-100 border rounded p-1" placeholder="Enter your name" onChange={(e) => setData({ ...data, Name: e.target.value })} value={data.Name} />
        <br />
        <input type="email" className="m-1 w-full bg-black text-gray-100 border-gray-400 border rounded p-1" name="" id="" placeholder="Enter your mail" onChange={(e) => setData({ ...data, Email: e.target.value })} value={data.Email} />
        <br />
        <input type="number" className="m-1 w-full bg-black border-gray-400 text-gray-100 border rounded p-1" name="" id="" placeholder="Enter your phone" onChange={(e) => setData({ ...data, Phone: e.target.value })} value={data.Phone || ""} />
        <br />
        <input type="text" className="m-1 w-full bg-black border-gray-400 text-gray-100 border rounded p-1" placeholder="Enter your Message" onChange={(e) => setData({ ...data, Message: e.target.value })} value={data.Message} />
        <br />
        <button className="bg-white text-black w-[40%] p-2 rounded-lg my-4" onClick={handleSubmit} disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
      </div>
    </div>
  );
}

export default Contact;
