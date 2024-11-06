import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cart = ({handleactive}) => {
  const  clearstorage=()=>{
    localStorage.clear();
  }

  const passactive=()=>{
    handleactive()
  }

  const[disabled,setdisabled]=useState(true);
  

  

  const[cart,setcart]=useState([]);
  useEffect(()=>{
    const getcart=localStorage.getItem('cart');
    const parsedata=JSON.parse(getcart)
    setcart(parsedata)
    if(parsedata){
      setdisabled(false)
    }
    else{
      setdisabled(true)
    }
  },[])
  const sortdata=()=>{
    const sortedcart=[...cart].sort((a,b)=>b.price-a.price)
    setcart(sortedcart)
  }
  const totalIncome = () => {
    let total = 0
    cart&&cart.forEach((value) => {
        total += value.price
    })
    return total.toFixed(2)
}
  return (
    <>
      <div className="flex justify-center items-center py-5 bg-purple-600 w-11/12 mx-auto border-none rounded-b-lg">
        
        <div className="flex gap-2">
            <button className="border border-black px-12 py-2  font-bold rounded-full bg-white text-black" >Cart</button>
            <button className="border border-white px-10 py-2  font-bold rounded-full bg-purple-600 text-white" onClick={passactive}>Wishlist </button>
        </div>
    </div>
      <div className="md:flex w-11/12  md:px-20 mx-auto justify-between pt-5">
        <div><h2 className="text-xl font-bold">Cart</h2></div>
        <div className="md:flex gap-2 items-center">
          <h2 className="text-xl font-bold">Total cost:{totalIncome()}</h2>
          <button onClick={()=>{
            sortdata();
          }} className="border border-purple-500 px-5 py-2  text-black font-bold rounded-full " >Sort by Price</button>
          <button disabled={disabled}   onClick={()=>{
            clearstorage();
            document.getElementById('my_modal_1').showModal()
          }} className="border border-black px-8 py-2 bg-purple-500 text-white font-bold rounded-full " > Purchase</button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="flex justify-center">
                <img src="https://img.icons8.com/?size=48&id=81438&format=png" alt="" />
              </div>
              <h3 className="font-bold pt-2 text-center text-2xl">Payment Successfully!</h3>
              <p className="pt-4 text-center">Thanks for purchasing.</p>
              <p className=" text-center">Total:{totalIncome()}</p>
              <div className="modal-action">
                <form className="w-full border-none rounded-full" method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <NavLink to="/" className="btn w-full">Close</NavLink>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="mt-5 md:px-24">
          {cart&&cart.map((nawcart)=>{
           return  <div key={nawcart.product_id} className="my-2 mx-10">
            <div className="md:flex bg-white border-none rounded-lg justify-between p-5 items-center">
              <div className=" md:flex items-center gap-5">
              <div className="w-32 border rounded-lg p-5 h-32"><img src={nawcart.product_image} alt="" /></div>
              <div>
                <h2 className="text-xl font-bold">{nawcart.product_title}</h2>
                <p className="my-2">{nawcart.description}</p>
                <p className="font-bold">Price:{nawcart.price}</p>
              </div>
              </div>
              <div><button className="btn">delete</button></div>
            </div>
            </div>
            
          })}
      </div>
      
    </>
  )
}

export default Cart