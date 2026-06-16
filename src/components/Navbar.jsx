import { Link } from "react-router-dom";
import "../App.css";
export default function Navbar() {
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
    {
      title: "SignUp",
      url: "/signup",
      className: "nav-links-mobile",
    },
  ];
  return (
    <nav className="flex items-center justify-between py-0 px-8 w-[95%] h-20 rounded-xl shadow-xl">
      <h1 className="text-black text-[2rem] cursor-pointer font-bold">
        Trippy
      </h1>

      <ul className="grid grid-cols-6 gap-2.5 items-center">
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
        <button className="py-2 px-4 whitespace-nowrap text-xl font-semibold border-none cursor-pointer rounded-md transition ease-in-out hover:bg-[#151516] hover:text-white hover:py-2 hover:px-4">
          Sign Up
        </button>
      </ul>
    </nav>
  );
}
