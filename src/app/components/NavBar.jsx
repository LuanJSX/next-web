"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 p-2">
      <p className="text-[#ffffff]">Luan <span className='text-[#4C89F9]'>Dev</span></p>
        <div className="mobile-menu block md:hidden">

          {!navBarOpen ? (
              <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
            onClick={() => setNavBarOpen(false)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  );
};

export default NavBar;
