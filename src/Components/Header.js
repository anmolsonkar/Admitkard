import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed bg-white w-full z-20  top-0 left-0 shadow-lg">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#666666]">
        <h1 className="text-3xl font-bold">
          <img src="logo.svg" className="lg:w-40 w-32" alt="Logo" />
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>

          <li className="p-4">
            <Menu>
              <div>
                <Menu.Button className="flex">
                  Manage
                  <ChevronDownIcon
                    className=" mt-[2px] h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/Manage"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#555454]"
                              : "text-[#666666]",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Statement of Purpose (SOP)
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          <li className="p-4">
            <Link to="/Community">Community forum</Link>
          </li>
          <li className="p-4">
            <Link to="/About">About</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 shadow-md bg-white ease-in-out duration-500"
              : "ease-in-out duration-500  fixed left-[-100%]"
          }
        >
          <h1 className=" text-3xl font-bold m-4">
            <img src="logo.svg" className="w-36" alt="Logo" />
          </h1>
          <li className="p-4 border-b border-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-300">
            <Menu>
              <div>
                <Menu.Button className="flex">
                  Manage
                  <ChevronDownIcon
                    className=" mt-[2px] h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="">
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/Manage"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#555454]"
                              : "text-[#666666]",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <ul className="list-disc">
                            {" "}
                            <li> Statement of Purpose</li>
                          </ul>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          <li className="p-4 border-b border-gray-300">
            <Link to="/Community">Community forum</Link>
          </li>
          <li className="p-4">
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
