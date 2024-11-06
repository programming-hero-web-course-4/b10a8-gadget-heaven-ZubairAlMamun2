import { useLoaderData } from "react-router-dom"
import AllGadget from "./AllGadget"
import Banner from "./Banner"
import { Helmet } from "react-helmet";


const Home = () => {
  const categories=useLoaderData();
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Banner></Banner>
        <AllGadget categories={categories}> </AllGadget>
        
    </div>
  )
}

export default Home