import * as React from "react";
import mehdi1 from "../assets/mehdi1.png";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Menuu() {
return(
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
              Rawdati
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
            Ajouter une creche
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
             Ajouter un Admin
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

);
}
export default Menuu;