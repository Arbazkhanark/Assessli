import { useState } from "react"
import Contact from "./Contact"

const Hero = ({setContacts}) => {
  const [showModal,setShowModal]=useState(false)
  return (
    <div className="p-20 bg-black text-white text-center">
        <h1 className=" text-5xl font-bold">Check out some examples</h1>
        <h3 className="text-gray-300 mt-3 w-[60%] m-auto">Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your own.</h3>
        
        <div className="mt-2">
            <button className="bg-white text-black mr-2 p-2 rounded">Connect</button>
            <button className="border text-gray-400 p-2 rounded" onClick={()=>setShowModal(true)}>Contact</button>
        </div>
        {showModal && <Contact setShowModal={setShowModal} setContacts={setContacts} />}
    </div>
  )
}

export default Hero