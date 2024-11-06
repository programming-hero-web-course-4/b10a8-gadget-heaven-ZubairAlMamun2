import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
  return (
    
    
      <div >
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <div className="bg-gray-100">
      <Header />
      <div className="min-h-[40vh]">
      <Outlet/>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Root