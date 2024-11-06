import { useLoaderData } from "react-router-dom"
import AllGadget from "./AllGadget"
import Banner from "./Banner"


const Home = () => {
  const categories=useLoaderData();
  return (
    <div>
        <Banner></Banner>
        <AllGadget categories={categories}> </AllGadget>
        
    </div>
  )
}

export default Home