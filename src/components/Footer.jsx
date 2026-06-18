import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-black py-16 lg:px-24 px-8 text-white">
        <div className="flex items-center justify-between text-start flex-wrap">
          <div className="">
            <h1 className="text-3xl font-bold">Trippy</h1>
            <p>Choose your favourit destination</p>
          </div>
          <div className="">
            <Link>
              <i className="fa-brands fa-facebook-square text-white ml-2 text-3xl hover:text-[#01959a] mt-4 mr-4 lg:mt-0 lg:mr-0"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-instagram-square text-white ml-2 text-3xl hover:text-[#01959a]  mt-4 mr-4 lg:mt-0 lg:mr-0"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-behance-square text-white ml-2 text-3xl hover:text-[#01959a]  mt-4 mr-4 lg:mt-0 lg:mr-0"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-twitter-square text-white ml-2 text-3xl hover:text-[#01959a]  mt-4 mr-4 lg:mt-0 lg:mr-0"></i>
            </Link>
          </div>
        </div>

        <div className="w-[50%] lg:w-full flex flex-row  justify-between pt-16 text-start text-white flex-wrap">
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">Projects</h4>
            <a className="no-underline pb-1 text-xl" href="/">
              ChangeLog
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              Status
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              License
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              All Vission
            </a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">Community</h4>
            <a className="no-underline pb-1 text-xl" href="/">
              Github
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              Issues
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              Projects
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              Twitter
            </a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">Help</h4>
            <a className="no-underline pb-1 text-xl" href="/">
              Support
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              Troubleshooting
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              Contact us
            </a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">Others</h4>
            <a className="no-underline pb-1 text-xl" href="/">
              Terms of Servies
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              Privacy Policy
            </a>
            <a className="no-underline pb-1 text-xl" href="/">
              License
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
