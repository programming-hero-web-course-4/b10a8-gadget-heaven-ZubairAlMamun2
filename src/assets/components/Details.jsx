import {  useLoaderData, useParams } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { v4 as uuidv4 } from 'uuid';
import { AddCart,AddFav } from "./utils/cart";

uuidv4();
 


const Details = () => {
    const {product_Id}=useParams()
    const data=useLoaderData()

      const product=data.find((newdata)=>newdata.product_id==product_Id)
   
      const handleaddtocart=(product)=>{
        AddCart(product)
      }
      const handleaddtofav=(product)=>{
        AddFav(product)
      }

  return (

    <div className="w-11/12 mx-auto bg-purple-600 border-none  rounded-b-lg text-white relative mb-[100vh] md:mb-[45vh]">
        <h1 className="text-4xl font-bold text-center w-8/12 mx-auto pt-8">Product Details</h1>
        <p className="text-center w-5/12 mx-auto pt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="flex justify-center py-5 pb-[25vh]"></div>
        <div className="w-11/12 md:w-6/12  absolute top-[75%] left-[4%] md:top-[55%] md:left-[25%] rounded-lg border-2 bg-white md:grid grid-cols-2 md:grid-cols-3 items-center p-5">
            <div className="col-span-1"><img src={product.product_image} alt="" /></div>
            <div className="col-span-1 md:col-span-2 text-black">
              <h2 className="text-3xl font-bold">{product.product_title}</h2>
              <p className="text-base font-bold py-2">Price :$ {product.price}</p>
              {product.availability?<p className="border w-24 text-center border-green-400 px-2 py-1 rounded-full text-green-400">In Stock</p>:<p className="border w-28 text-center border-red-400 px-2 py-1 rounded-full text-red-400">Not In Stock</p>}
              <p className="py-2">{product.description}</p>
              <h2 className="text-base font-bold pb-2">Specification:</h2>
              <ul>
                {product.Specification.map(data=><li className="list-decimal ml-8" key={uuidv4()}>{data}</li>)}
              </ul>
              <h2 className="text-base font-bold py-2">Rating ⭐ </h2>
              <div className="flex justify-start gap-2 items-center pb-2">  <ReactStars
                  count={5}
                  value={product.rating}
                  
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                /><p>{product.rating}</p></div>
              <div className="flex gap-2">
                  <button onClick={()=>{
                    handleaddtocart(product);
                  }}  className="border bg-purple-600 text-white  rounded-full flex justify-start items-center px-3 py-2">Add To Card <img className="h-6 w-6 rounded-full text-white" src="https://img.icons8.com/?size=32&id=15893&format=png" alt="" /></button>
                  <button onClick={()=>{
                    handleaddtofav(product);
                  }}  className="border rounded-full px-1 text-base font-bold"><img className="h-6 w-6 bg-white rounded-full " src="https://img.icons8.com/?size=24&id=86721&format=png" alt="" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details


