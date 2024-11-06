

const Footer = () => {
  return (
    <div className="w-full mx-auto py-20">
      <h1 className="text-center text-2xl font-bold">Gadget Heaven</h1>
      <p className="text-center text-slate-500">Leading the way in cutting-edge technology and innovation.</p>
      <div className="w-7/12 mx-auto grid grid-cols-1 lg:grid-cols-3 ">
        <div className="pt-10">
          <p className="font-bold text-center ">Services</p>
          <ul className="col-span-1 text-slate-500">
            <li className="text-center"><a href="">Product Support</a></li>
            <li className="text-center"><a href="">Order Tracking</a></li>
            <li className="text-center"><a href="">Shipping & Delivery</a></li>
            <li className="text-center"><a href="">Returns</a></li>
          </ul>
        </div>
        <div className="pt-10">
          <p className="font-bold text-center ">Company</p>
          <ul className="col-span-1 text-slate-500">
            <li className="text-center"><a href="">About Us</a></li>
            <li className="text-center"><a href="">Careers</a></li>
            <li className="text-center"><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="pt-10">
          <p className="font-bold text-center ">Legal</p>
          <ul className="col-span-1 text-slate-500">
            <li className="text-center"><a href="">Terms of Service</a></li>
            <li className="text-center"><a href="">Privacy Policy</a></li>
            <li className="text-center"><a href="">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer