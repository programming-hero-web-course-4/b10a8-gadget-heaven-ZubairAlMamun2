import { Helmet } from "react-helmet"


const Statistics = () => {
  return (
    <div className="w-11/12  mx-auto ">
    <div className=" bg-purple-600 border-none rounded-b-lg  text-white ">
   <h1 className="text-4xl font-bold text-center w-8/12 mx-auto pt-8">Statistics</h1>
   <p className="text-center w-8/12 mx-auto pt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
   <div className="flex justify-center gap-5 py-4"></div> 
</div>
<h2 className="text-xl font-bold text-left px-20 pt-5">Statistics</h2>
      <div className="flex justify-center pt-14">
         <h2 className="text-5xl font-bold text-purple-600">No data available</h2>
     </div>

     <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  </div>
  )
}

export default Statistics