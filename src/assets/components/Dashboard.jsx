import { useState } from "react"
// import { NavLink, Outlet } from "react-router-dom"
import Cart from "./Carts"
import Favorit from "./Favorit"


const Dashboard = () => {
  const [active, setactive] = useState(true)
  const handleactive=()=>{
    setactive(!active)
  }

  
  return (
  <div>
     <div className="w-11/12  mx-auto ">
     <div className=" bg-purple-600 border-none   text-white ">
    <h1 className="text-4xl font-bold text-center w-8/12 mx-auto pt-8">Dashboard</h1>
    <p className="text-center w-8/12 mx-auto pt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    <div className="flex justify-center gap-5 py-4">
    {/* <NavLink to='/dashboard/cart'  className={({isActive})=>`border border-white px-12 py-2  font-bold rounded-full ${isActive?'bg-white text-black':""}`}>Cart</NavLink>
    <NavLink to='/dashboard/favorit' className={({isActive})=>`border border-white px-12 py-2   font-bold rounded-full ${isActive?'bg-white text-black':""}`}>Wishlist</NavLink> */}
    
    </div> 
</div>
{/* <Outlet /> */}
   </div>
   {active?<Cart  handleactive={handleactive} ></Cart>:<Favorit handleactive={handleactive} ></Favorit>}
  </div>
  )
}

export default Dashboard