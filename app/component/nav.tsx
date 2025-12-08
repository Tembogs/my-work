"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-10 py-5 bg-black text-white flex justify-between items-center shadow-md fixed top-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">
        Temmy<span className="text-blue-500">.dev</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/project" className="hover:text-blue-500 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white"
          >
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
              className="hover:text-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
