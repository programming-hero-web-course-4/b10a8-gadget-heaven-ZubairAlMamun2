

const Header = () => {
  return (
    <div className="navbar bg-purple-600 w-11/12 mx-auto text-white border-none mt-2 rounded-t-lg px-5">
  <div className="navbar-start">
    <h1 className="text-2xl font-bold">Gadget Heaven</h1>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1 text-base">
      <li><button>Home</button></li>
      <li><button>Statistics</button></li>
      <li><button>Dashboard</button></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-2">
      <button><img className="h-8 w-8 bg-white rounded-full p-1" src="https://img.icons8.com/?size=32&id=15893&format=png" alt="" /></button>
      <button><img className="h-8 w-8 bg-white rounded-full p-1" src="https://img.icons8.com/?size=24&id=86721&format=png" alt="" /></button>
    </div>
  </div>
</div>
  )
}

export default Header