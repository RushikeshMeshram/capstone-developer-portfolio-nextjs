"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  // console.log(session.user.name, "Navbar");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 px-12 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">Portfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Blogs
          </Link>
          <Link
            href="/admin"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Admin
          </Link>
          {!session ? (
            <button
              onClick={() => signIn("github")}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded-md border-solid "
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => signOut("github")}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded-md border-b-cyan-50"
            >
              Sign out
            </button>
          )}

          <h2 className="text-white mt-2">
            {session?.user?.name ? session.user.name : ""}
          </h2>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-blue-600 space-y-4 py-4`}
      >
        <Link href="/" className="text-white block px-4 py-2">
          Home
        </Link>
        <Link href="/projects" className="text-white block px-4 py-2">
          Projects
        </Link>
        <Link href="/blogs" className="text-white block px-4 py-2">
          Blogs
        </Link>
        <Link href="/admin" className="text-white block px-4 py-2">
          Admin
        </Link>
      </div>
    </nav>
  );
}
