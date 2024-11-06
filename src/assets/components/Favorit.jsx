import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Favorit = ({handleactive}) => {

  const passactive=()=>{
    handleactive()
  }

  const[fav,setcart]=useState([]);
  useEffect(()=>{
    const getcart=localStorage.getItem('fav');
    const parsedata=JSON.parse(getcart)
    setcart(parsedata)
  },[])
  return (
    <>
    <div className="flex  justify-center items-center py-5 bg-purple-600 w-11/12 mx-auto border-none rounded-b-lg">
        <div className="flex gap-2">
            <button className="border border-white px-12 py-2  font-bold rounded-full bg-purple-600 text-white" onClick={passactive}>Cart</button>
            <button className="border border-black px-10 py-2  font-bold rounded-full bg-white text-black" >Wishlist </button>
        </div>
    </div>
      <div className="flex w-11/12 px-20 mx-auto justify-between pt-5">
        <div><h2 className="text-xl font-bold">WishList</h2></div>
        
      </div>
      <div className="mt-5 px-24">
          {fav&&fav.map((nawcart)=>{
           return  <div key={nawcart.product_id} className="my-2 mx-10">
            <div className="flex bg-white border-none rounded-lg justify-between p-5 items-center">
              <div className=" flex items-center gap-5">
              <div className="w-32 border rounded-lg p-5 h-32"><img src={nawcart.product_image} alt="" /></div>
              <div>
                <h2 className="text-xl font-bold">{nawcart.product_title}</h2>
                <p className="my-2">{nawcart.description}</p>
                <p className="font-bold mb-2">Price:{nawcart.price}</p>
                <button className="border border-none px-8 py-2 bg-purple-500 text-white font-bold rounded-full">Add to Card</button>
              </div>
              </div>
              <div><button>delete</button></div>
            </div>
            </div>
            
          })}
      </div>
      
    </>
  )
}

export default Favorit