
import { Outlet } from "react-router-dom";
import Categories from "./Categories";

// eslint-disable-next-line react/prop-types
const AllGadget = ({categories}) => {
  

  return (
    <div className="w-11/12 mx-auto pt-10">
        <h1 className="text-center text-3xl font-bold ">Explore Cutting-Edge Gadgets</h1>
        <div className="md:grid grid-cols-10 gap-3 mt-10">
            <div className="col-span-2 bg-white  py-5 border-none rounded-lg">
                <Categories categories={categories} />
            </div>
            <div className="col-span-8 grid grid-cols-3 gap-2  justify-center">
                <Outlet />
            </div>

        </div>
        
    </div>
  )
}

export default AllGadget