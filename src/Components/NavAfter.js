import * as React from "react";
import mehdi1 from "../assets/mehdi1.png"
import Footer from "../Components/Footer.js"
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import rawda from "../assets/rawda.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavAfter() {
  const [fopen, setFOpen] = React.useState(false);
  const mehdi = () => {
    return (
<Footer/>
    );
  }



  const handleClick = () => {
    if (fopen === true) {
      setFOpen(false);
    } else setFOpen(true);
  };
  
  return (
    <>
      <Disclosure as="nav" className="bg-white border-b border-gray-300 ">
        {({ open }) => (
          <>
       

      
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
               
                {/* Mobile menu button */}
                <div className="flex space-x-48 flex-1 justify-between sm:items-stretch ">
                  <div className="flex flex-shrink-0 items-center justify-between">
                    <a href="/">
                    <img
                        className="block h-8 w-auto lg:hidden"
                        src={rawda}
                        alt="rawdalogo"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src={rawda}
                        alt="rawdalogo"
                      />
                    
                    </a>
                  </div>
                  
                </div>


                {/*  <div className="hidden sm:ml-6 sm:block">
                    <div className="nav-search flex space-x-4 bg-white items-center border border-gray-300 rounded-xl ">
                      <input
                        id="desktop-search"
                        type="text"
                        placeholder="Rechercher..."
                        className="nav-search w-full outline-none bg-transparent px-4 py-2 text-sm text-gray-600"
                      />
                      <a href="#search" onClick={handleClick}>
                        <AdjustmentsHorizontalIcon
                          className="hidden md:inline-flex h-10 rounded-full p-2 cursor-pointer mx-4 text-gray-500"
                          onClick={handleClick}
                        />
                      </a>
                    </div>
                  </div> */} 



                <div className="absolute space-x-4 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                 
                  {/* Profile dropdown */}
                   <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={mehdi1}

                          alt="user pic"
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="myprofile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/messages"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Notifications
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/login"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Deconnecter
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> 
                </div>
              </div>
            </div>

         
          </>
        )}
      </Disclosure>

      
      
               
              
      
    </>
    
  );
}