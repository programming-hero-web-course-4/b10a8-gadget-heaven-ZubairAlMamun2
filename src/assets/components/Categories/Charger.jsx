import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Charger = () => {
    const[charger,setCharger]=useState([]);
    useEffect(()=>{
        fetch("./data.json").
        then((res)=>res.json()).
        then((data)=>setCharger(data))
    },[])
  return (
    <>
      {charger.map((newgadget)=>{
            return (
                <div className="card bg-base-100  col-span-3 md:col-span-1 shadow-xl" key={newgadget.product_id}>
                <figure className="px-10 pt-10 ">
                    <img 
                    src={newgadget.product_image}
                    alt=""
                    className="rounded-xl bg-gray-100" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{newgadget.product_title}</h2>
                    <p>Price : {newgadget.price}k</p>
                    <div className="card-actions">
                    <Link to={newgadget.product_id}><button className="border border-purple-600 px-5 py-2 rounded-full" >Details</button></Link>
                    </div>
                </div>
                </div>
            )
        })}
    </>
  )
}

export default Charger