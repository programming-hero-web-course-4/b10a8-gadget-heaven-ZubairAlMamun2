import { useEffect, useState } from "react";
import {  NavLink, useLocation} from "react-router-dom"


const Header = () => {
  const {pathname}=useLocation();
  // console.log(pathname)
  const[cart,setcart]=useState([]);
  useEffect(()=>{
    const getcart=localStorage.getItem("cart");
    const parsedata=JSON.parse(getcart)
    setcart(parsedata)
  },[localStorage.getItem("cart")])
  const[fav,setfav]=useState([]);
  useEffect(()=>{
    const getfav=localStorage.getItem("fav");
    const parsedata=JSON.parse(getfav)
    setfav(parsedata)
  },[localStorage.getItem("fav")])
  
 
  return (
   <div className="bg-gray-100 pt-2">
     {/* <div className="navbar bg-white w-11/12 mx-auto text-black border-none rounded-t-lg px-5"> */}
     <div className={`${pathname=="/"?'navbar w-11/12 mx-auto bg-purple-600 text-black border-none rounded-t-lg px-5':'navbar w-11/12 mx-auto bg-white text-black border-none rounded-t-lg px-5'}`}>
  <div className="navbar-start">
    <h1 className="text-2xl font-bold">Gadget Heaven</h1>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1 text-base">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/statiscits">Statistics</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-2">
      <button className="relative"><img className="h-8 w-8 bg-white rounded-full p-1" src="https://img.icons8.com/?size=32&id=15893&format=png" alt="" /><p className="absolute -top-1 -right-1">{cart&&cart.length}</p></button>
      <button className="relative"><img className="h-8 w-8 bg-white rounded-full p-1" src="https://img.icons8.com/?size=24&id=86721&format=png" alt="" /><p className="absolute -top-1 -right-1">{fav&&fav.length}</p></button>
      
    </div>
  </div>
</div>
   </div>
  )
}

export default Header