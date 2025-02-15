import { useEffect, useState } from "react";



function Fetchdata(url) {
  const [data , setData] = useState(null);
  const [error , setErr] = useState(null);
  const [loading , setLoading] = useState(true)
  
  useEffect(() => {
    const abortController = new AbortController();
    const fetchdata = async () => {
      try{
      const response = await fetch(url);
      const result = await response.json();
      setData(result)
    }catch(err){
        setErr(err)
    } finally {
      setLoading(false)
    }

    
   
    }
    fetchdata();
    return () => abortController.abort();
  }, [url]);
  return {data , loading , error}
}

export default Fetchdata