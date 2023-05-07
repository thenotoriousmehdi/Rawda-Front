import * as React from "react";
import mehdi1 from "../assets/mehdi1.png";
import Footer from "../Components/Footer.js";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import iconotif from "../assets/iconotif.svg";
import helpicon from "../assets/helpicon.svg";
import Menuu from "../Components/Menuu";

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
    return <Footer />;
  };

  const handleClick = () => {
    if (fopen === true) {
      setFOpen(false);
    } else setFOpen(true);
  };

  return (
    <>
      <Disclosure
        as="nav"
        className="sticky top-0 z-50 bg-white border-b border-gray-300 "
      >
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


<div className="flex gap-2">



{/* <div className="absolute space-x-4 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a href="/">
                    <button
                      id="pub"
                      type="button"
                      className="rounded-full font-medium text-sm bg-rawdawhite px-4 py-2 text-violet-700 hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800"
                    >
                      Aide
                    </button>
                  </a>

                  </div> */}

                  <div className="flex justify-center items-center bg-rawdawhite rounded-full h-[35px] w-[35px]">

<a href="/Help">
  <img src={helpicon} />
    </a>

</div>

<div className="flex justify-center items-center bg-rawdawhite rounded-full h-[35px] w-[35px]">

<a href="/Notifications">
  <img src={iconotif} />
    </a>

</div>


                  {/* Profile dropdown */}
                 <Menuu/>

                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}
