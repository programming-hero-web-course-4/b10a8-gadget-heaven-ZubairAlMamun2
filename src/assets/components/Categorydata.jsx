import { useEffect, useState } from "react";
import {  NavLink, useLoaderData, useParams } from "react-router-dom"

const Categorydata = () => {
    const data=useLoaderData();
    const {category}=useParams()
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        if(category){
            const filteredProduct=[...data].filter(
                product=>product.category===category  
            )
            setProduct(filteredProduct);
        }
        else{
            setProduct(data);
        }
    },[category, data]);
   
  return (
    <>{product.map((newgadget)=>{
        
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
                <NavLink to={`/detail/${newgadget.product_id}`}><button className="border border-purple-600 px-5 py-2 rounded-full" >Details</button></NavLink>
                </div>
                
            </div>
            </div>
        )
    })}</>
  )
}

export default Categorydata