import * as React from "react";
import mehdi1 from "../assets/mehdi1.png"
import Footer from "../Components/Footer.js"
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import rawda from "../assets/rawda.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
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
  const wilaya = [

    "Adrar", "Chlef", "Laghouat",  "Oum El Bouaghi", "Batna", "Béjaïa",  "Biskra",
    "Bechar", "Blida", "Bouira",  "Tamanrasset",   "Tbessa",  "Tlemcen", "Tiaret",
    "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Setif",  "Saeda", "Skikda",  "Sidi Bel Abbes",
    "Annaba", "Guelma",  "Constantine", "Medea", "Mostaganem",  "M'Sila", "Mascara",
    "Ouargla",  "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj",  "Boumerdes",
    "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila",
    "Ain Defla", "Naama",  "Ain Temouchent",  "Ghardaefa", "Relizane", "El M'ghair",  "El Menia",
    "Ouled Djellal", "Bordj Baji Mokhtar", "Béni Abbès",  "Timimoun", "Touggourt",
    "Djanet",  "In Salah",  "In Guezzam",
    
  ];
 
  return (
    <>
      <Disclosure as="nav" className="bg-white border-b border-gray-300 ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button*/}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Mobile menu button */}
                <div className="flex space-x-48 flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
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
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="nav-search flex space-x-4 bg-white items-center border border-gray-300 rounded-xl ">
                      <input
                        id="desktop-search"
                        type="text"
                        placeholder="Rechercher..."
                        className="nav-search w-full outline-none bg-transparent px-4 py-2 text-sm text-gray-600"
                      />
                      <a href="#search" onClick={handleClick}>
                        <MagnifyingGlassIcon
                          className="hidden md:inline-flex h-10 rounded-full p-2 cursor-pointer mx-4 text-gray-500"
                          onClick={handleClick}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute space-x-4 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a href="/posturad">
                    <button
                      id="pub"
                      type="button"
                      className="rounded-full font-medium text-sm bg-rawdawhite px-4 py-2 text-violet-700 hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800"
                    >
                      Se Connecter
                    </button>
                  </a>
                  <a href="/posturad">
                    <button
                      id="pub"
                      type="button"
                      className="rounded-full font-medium text-sm bg-rawdapurple px-4 py-2 text-rawdawhite hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800"
                    >
                      S'inscrire
                    </button>
                  </a>
                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="relative ml-3">
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
                              Messages
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
                  </Menu> */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
              
                <a href="/posturad">
                  <button
                    fullWidth
                    type="button"
                    className=" block px-3 py-2 rounded-full text-base font-medium bg-violet-700 text-white hover:text-violet-700 hover:bg-violet-50"
                  >
                    Se Connecter
                  </button>
                </a>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
              
                <a href="/posturad">
                  <button
                    fullWidth
                    type="button"
                    className=" block px-3 py-2 rounded-full text-base font-medium bg-violet-700 text-white hover:text-violet-700 hover:bg-violet-50"
                  >
                    S'inscrire
                  </button>
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      
      {fopen ? (
        <Disclosure
          as="nav"
          id="main-menu-filter"
          className="bg-white border-b border-gray-300 p-5"
        >
          <>
            <div className="mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-start">
                  <div className=" sm:ml-6 sm:block">
                    <div className="flex-col space-x-4">
                
                    </div>
                  </div>
                  <div className=" sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <select
                        id="ad-categorie"
                        class="block px-3 py-2 text-gray-700 bg-rawdawhite border border-rawdapurple rounded-md shadow-sm w-72 focus:outline-violet-200 focus:ring-violet-500 focus:border-transparent focus:ring-1"
                        name="categorie"
                      >
                        <option value="">Pedagogie</option>
                        <option value="">Montessori</option>
                        <option value="">Freinet</option>
                        <option value="">Steiner</option>
                        <option value="">Institutionnelle</option>
                        <option value="">Pikler-Loczy</option>
                      </select>
                    </div>
                  </div>
                  <div className=" sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <select
                        id="Type d’établissement"
                        class="block px-3 py-2 text-gray-700 bg-rawdawhite border border-rawdapurple rounded-md shadow-sm w-72 focus:outline-violet-200 focus:ring-violet-500 focus:border-transparent focus:ring-1"
                        name="categorie"
                      >
                        <option value="">Type d’établissement</option>
                        <option value="">Prive</option>
                        <option value="">Public</option>
      
                      </select>
                    </div>
                  </div>
                  <div className=" sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <select
                        id="ad-categorie"
                        class="block px-3 py-2 text-gray-700 bg-white border border-rawdapurple rounded-md shadow-sm w-72 focus:outline-violet-200 focus:ring-violet-500 focus:border-transparent focus:ring-1"
                        name="wilaya"
                      >
                        <option value="">Wilaya</option>
                        {wilaya.map((items, key) => (
                          <option value={items}>{items}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className=" flex-col sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <select
                        id="Type d'accueil"
                        class="block px-3 py-2 text-gray-700 bg-rawdawhite border border-rawdapurple rounded-md shadow-sm w-72 focus:outline-violet-200 focus:ring-violet-500 focus:border-transparent focus:ring-1"
                        name="categorie"
                      >
                        <option value="">Type d’accueil</option>
                        <option value="">Regulier</option>
                        <option value="">Ocasionnel</option>
      
                      </select>
                    </div>
                    <div className="flex space-x-4">
                      <select
                        id="Langue"
                        class="block px-3 py-2 text-gray-700 bg-rawdawhite border border-rawdapurple rounded-md shadow-sm w-72 focus:outline-violet-200 focus:ring-violet-500 focus:border-transparent focus:ring-1"
                        name="categorie"
                      >
                        <option value="">Langue</option>
                        <option value="">Arabe</option>
                        <option value="">Francais</option>
                        <option value="">Anglais</option>
      
                      </select>
                    </div>
                  </div>
                 {/*  <div className=" sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <select
                        id="Langue"
                        class="block px-3 py-2 text-gray-700 bg-rawdawhite border border-rawdapurple rounded-md shadow-sm w-72 focus:outline-violet-200 focus:ring-violet-500 focus:border-transparent focus:ring-1"
                        name="categorie"
                      >
                        <option value="">Langue</option>
                        <option value="">Arabe</option>
                        <option value="">Francais</option>
                        <option value="">Anglais</option>
      
                      </select>
                    </div>
                  </div> */}
              <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-start">
                <div className=" sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      id="localisation-commune"

                      placeholder="Commune"

                  

                      required
                      className=" rounded-lg border-rawdapurple flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className=" sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <input
                      type="text"

      

                      id="Date-max"
                      placeholder="mm/dd/yyyy"

                      required
                      className=" rounded-lg border-rawdapurple flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className=" sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <input
                      type="text"

                      id="Jours d'accueil"
                      placeholder="Jours d'accueil"

                

                      required
                      className=" rounded-lg border-rawdapurple flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div> 
              
              <div className="p-5">
                <a href="#Filter-search">
                  <button
                    type="submit"
                    class="py-2 px-4  bg-violet-700 hover:bg-violet-900 focus:ring-violet-700 focus:ring-offset-violet-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                  Rechercher
                  </button>
                </a>
              </div>
            </div>
          </>
        </Disclosure>
      ) : null}
    </>
    
  );
}
