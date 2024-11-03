

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto bg-purple-600 border-none  rounded-b-lg text-white relative mb-[40vh]">
        <h1 className="text-4xl font-bold text-center w-8/12 mx-auto pt-8">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className="text-center w-5/12 mx-auto pt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="flex justify-center py-5 pb-[35vh]"><button className="text-purple-600 px-3 py-2 border-none rounded-full bg-white font-bold">Shop Now</button></div>
        <div className="w-6/12 absolute top-[55%] left-[25%] border-white rounded-lg border-8">
            <img className="w-full  rounded-lg " src="./images/banner.jpg" alt="" />
        </div>
    </div>
  )
}

export default Banner