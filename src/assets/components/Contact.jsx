import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom"
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const handleclick=()=>{
        toast("Ok! We received your information")
    }
  return (
    <div className="w-11/12  mx-auto ">
        <div className="">
     <div className=" bg-purple-600 border-none rounded-b-lg   text-white ">
    <h1 className="text-4xl font-bold text-center w-8/12 mx-auto pt-8">Contact us</h1>
    <p className="text-center w-8/12 mx-auto pt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    <div className="flex justify-center gap-5 py-4"></div> 
    </div></div>
    <div className="flex justify-center mt-10">
    <div className="card bg-base-100  shadow-xl">

  <div className="card-body">
    <h2 className="card-title text-2xl font-bold justify-center">Enter your Information Here</h2>
         <div  className="flex justify-center">
            <input className="border rounded-lg p-2 w-[100%]" type="text" placeholder="Your name:" required />
        </div>
        <div className="flex justify-center">
            <input className="border rounded-lg p-2 w-[100%]" type="email" placeholder="Your email:" required />
        </div>
        <div className="flex justify-center">
            <input className="border rounded-lg p-2 w-[100%]" type="number" placeholder="Your number:" required />
        </div>
        <div className="flex justify-center">
            <textarea className="border rounded-lg p-2 w-[100%]" type="number" placeholder="" required />
        </div>
    <div className="card-actions justify-center">
      <NavLink to="/" onClick={()=>{
        handleclick();
      }} className="btn btn-primary">Submit</NavLink>
    </div>
  </div>
</div>
       
    </div>

    <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    
    </div>
  )
}

export default Contact