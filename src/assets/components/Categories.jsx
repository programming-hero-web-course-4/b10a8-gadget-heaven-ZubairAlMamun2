/* eslint-disable react/prop-types */
import {  NavLink } from "react-router-dom"

const Categories = ({categories}) => {

  return (
    <div role="tablist" className="tabs tabs-bordered flex flex-col items-center gap-2">
        <NavLink to="/" role="tab tab-active" className={({isActive})=>`tab border-none rounded-full font-bold ${isActive?'tab-active bg-purple-600':""}`}>All</NavLink>
        {categories.map((category)=>{
             return(
                <NavLink to={`${category.category}`} key={category.id} role="tab" className={({isActive})=>`tab border-none rounded-full  font-bold ${isActive?'tab-active bg-purple-600':""}`}>{category.category}</NavLink>
            )
        })}
    </div>
  )
}

export default Categories