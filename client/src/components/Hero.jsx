import { useState } from "react"
import Contact from "./Contact"

const Hero = ({setContacts}) => {
  const [showModal,setShowModal]=useState(false)
  return (
    <div className="py-20 bg-black text-white text-center">
        <h1 className="w-[100%] lg:text-5xl md:text-3xl sm:text-xl max-sm:text-lg font-bold">Check out some examples</h1>
        <h3 className="text-gray-300 mt-3 w-[100%] m-auto">Click contact button to contact with us.</h3>
        
        <div className="mt-2 flex items-center justify-center">
            <button className="bg-white text-black mr-2 p-2 rounded">Connect</button>
            <button className="border text-gray-400 p-2 rounded" onClick={()=>setShowModal(true)}>Contact</button>
        </div>
        {showModal && <Contact setShowModal={setShowModal} setContacts={setContacts} />}
    </div>
  )
}

export default Hero