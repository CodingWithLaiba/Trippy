import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const MenuItems = [
    {
      title: "Home",
      url: "/",
      className: "nav_links",
      icons: "fa-solid fa-house-user",
    },
    {
      title: "About",
      url: "/about",
      className: "nav_links",
      icons: "fa-solid fa-circle-info",
    },
    {
      title: "Service",
      url: "/service",
      className: "nav_links",
      icons: "fa-solid fa-briefcase",
    },
    {
      title: "Contact",
      url: "/contact",
      className: "nav_links",
      icons: "fa-solid fa-address-book",
    },
    // {
    //   title: "SignUp",
    //   url: "/signup",
    //   className: "nav-links-mobile",
    // },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <nav className="flex items-center justify-between py-0 px-8 w-[95%] h-20 rounded-xl shadow-[0_5px_15px_0_rgba(0,0,0,0.25)] fixed z-50 top-5 bg-white">
        <h1 className="text-black text-[2rem] cursor-pointer font-bold ">
          Trippy
        </h1>
        <div className="lg:hidden z-10" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={`flex flex-col mt-20 justify-start bg-white w-full h-auto absolute rounded-2xl top-0 items-stretch pt-6  pb-0 m-0 transition-all duration-300 ${
            clicked ? "left-0 opacity-100 z-10" : "-left-full opacity-0 z-[-1]"
          } lg:grid  lg:grid-cols-6 lg:mt-0 lg:gap-2.5 lg:items-center lg:static lg:bg-transparent lg:w-auto lg:p-0 lg:opacity-100 lg:z-auto`}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.className} to={item.url}>
                  <i className={item.icons}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link
            to="/signup"
            className="w-full md:w-auto py-3 px-6 bg-gray-200 text-xl font-medium rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#151516] hover:text-white active:bg-[#151516] active:text-white"
          >
            Sign Up
          </Link>
        </ul>
      </nav>
    </div>
  );
}
