"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-100 to-gray-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MyBrand
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/articles">Articles</NavLink>
              <NavLink href="/product">Products</NavLink>
              <NavLink href="/admin">Admin</NavLink>
            </div>
            
            <div className="ml-6 flex items-center space-x-4">
              <Link href="/login">
                <Button 
                  variant="outline" 
                  className="border-2 border-gray-200 hover:border-transparent hover:bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:shadow-md transition-all"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white hover:shadow-lg transition-all hover:scale-[1.02]">
                  Register
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-xl">
          <div className="px-4 pt-2 pb-8 space-y-2 sm:px-6">
            <MobileNavLink href="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="/articles" onClick={toggleMenu}>Articles</MobileNavLink>
            <MobileNavLink href="/product" onClick={toggleMenu}>Products</MobileNavLink>
            <MobileNavLink href="/admin" onClick={toggleMenu}>Admin</MobileNavLink>
            
            <div className="pt-8 space-y-4">
              <Link href="/login" className="block" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-2 border-gray-200">
                  Login
                </Button>
              </Link>
              <Link href="/register" className="block" onClick={toggleMenu}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg font-medium transition-colors group"
    >
      {children}
      <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors text-lg font-medium"
    >
      {children}
    </Link>
  );
}