import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton
} from "@material-tailwind/react";

// import Main from "../Main/Main";




export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 text-[#fff] font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 text-[#fff] font-normal"
      >
        <a href="#portfolio" className="flex items-center">
          Portfolio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 text-[#fff] font-normal"
      >
        <a href="#contact" className="flex items-center">
          Contact us
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="-mx-5 max-h-[768px]  w-[100%]">
      <Navbar className="fixed top-0 z-50 h-max w-[100%] border-0 right-0 bg-[#100817] bg-opacity-60 rounded-none px-4 py-1 lg:px-8 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold flex items-center gap-2 font-poppins text-2xl text-white"
          >
            <div className="w-14 h-14 flex items-center border rounded-full bg-white">
              <img src="https://i.ibb.co/cDmJV3b/S-Coding-Sentinel-Logo-removebg-preview.png" alt="" />
            </div>
            Samya <samp className="text-[#9362F7] -ml-2 font-bold text-2xl">roy</samp>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">

              <button
                size="sm"
                className="hidden lg:inline-block"
              >
                <a href="#contact">
                  <button size="sm" id='contact3' className="btn  rounded-2xl border-none bg-[#9565F7] text-white hover:btn-outline ">
                    <span>Say hello</span>
                  </button>
                </a>
              </button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit  hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <a href=" #contact">
              <button size="sm" id='contact3' className="btn  bg-[#9565F7] hover:btn-outline rounded-2xl">
                <span>Say hello</span>
              </button>
            </a>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}