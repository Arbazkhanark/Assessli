import { useEffect, useState } from "react"

const useInternetStatus=()=>{
    const [interNetStatus,setInterNet]=useState(true);

    useEffect(()=>{
        window.addEventListener('online',()=>setInterNet(true));
        window.addEventListener('offline',()=>setInterNet(false))
    },[])

    return interNetStatus;
}


export default useInternetStatus;