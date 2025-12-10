"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home")

  return (
    <nav className="w-full px-6 md:px-10 py-5 bg-black text-white flex justify-between items-center shadow-md fixed top-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">
        TemBog<span className="text-blue-500">.dev</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <Link href="/" className={active === "Home" ? "bg-blue-600 px-4 py-2  rounded-lg  animate-pulse" : "hover:text-blue-500 hover:animate-ping transition"} 
          onClick={() => setActive("Home")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={active === "About" ? "bg-blue-600 px-4 py-2 rounded-lg  animate-pulse" : "hover:text-blue-500 hover:animate-ping transition"}
          onClick={() => setActive("About")} >
            About
          </Link>
        </li>
        <li>
          <Link href="/project" className={active === "Projects" ? "bg-blue-600 px-4 py-2 rounded-lg  animate-pulse" : "hover:text-blue-500 hover:animate-ping transition"}
          onClick={() => setActive("Projects")}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={active === "Contact" ? "px-4 py-2 bg-blue-600 rounded-lg text-white animate-pulse" : "hover:text-blue-500 hover:animate-ping transition"}
           onClick={() => setActive("Contact")}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 p-6 md:hidden shadow-lg">
          <li>
            <Link
              href="/"
              className={active === "Home" ? "bg-blue-600 px-4 py-2  rounded-lg  animate-pulse" : "hover:text-blue-500 transition"} 
              onClick={() =>{
                setActive("Home")
                setIsOpen(false)
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={active === "About" ? "bg-blue-600 px-4 py-2  rounded-lg  animate-pulse" : "hover:text-blue-500 transition"} 
              onClick={() =>{
                setActive("About")
                setIsOpen(false)
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/project"
              className={active === "Projects" ? "bg-blue-600 px-4 py-2  rounded-lg  animate-pulse" : "hover:text-blue-500 transition"}
              onClick={() => {
                setActive("Projects")
                setIsOpen(false)}}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={active === "Contact" ? "bg-blue-600 px-4 py-2  rounded-lg  animate-pulse" : "hover:text-blue-500 transition"}
              onClick={() =>{
                setActive("Contact") 
                setIsOpen(false)}}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
