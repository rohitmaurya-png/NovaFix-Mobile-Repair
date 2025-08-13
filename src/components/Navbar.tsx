"use client";

import { useState } from "react";
import LogoImage from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";
import RepairFormModal from "@/components/RepairFormModal";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close mobile menu
    }
  };

  return (
    <div className="fixed w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#F7AABE]/30 via-[#B57CEC]/30 to-[#E472D1]/30 border-b border-white/20">
      <div className="px-4">
        <div className="container flex justify-between items-center py-2">
          {/* Logo */}
          <div className="relative flex items-center gap-2">
  <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md"></div>
  <LogoImage className="h-12 w-12 relative mt-1" />
  <span className="relative text-white font-bold text-xl">NovaFix</span>
</div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-6 text-white items-center">
            <button
              onClick={() => handleScroll("hero")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("services")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              Services
            </button>
            <button
              onClick={() => handleScroll("product")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("faq")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => handleScroll("cta")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              CTA
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#B57CEC] to-[#E472D1] py-2 px-4 rounded-lg text-white hover:opacity-90 transition"
            >
              Book A Repair
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden border border-white/30 h-10 w-10 flex justify-center items-center rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="text-white" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden w-full flex flex-col gap-3 pb-4 text-white backdrop-blur-md bg-[#5D2CA8]/30 rounded-lg p-4 overflow-auto">
            <button
              onClick={() => handleScroll("about")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("services")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              Features
            </button>
            <button
              onClick={() => handleScroll("product")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              Updates
            </button>
            <button
              onClick={() => handleScroll("faq")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              Help
            </button>
            <button
              onClick={() => handleScroll("cta")}
              className="text-white/70 hover:text-white transition font-medium"
            >
              Customers
            </button>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-gradient-to-r from-[#B57CEC] to-[#E472D1] py-2 px-4 rounded-lg text-white hover:opacity-90 transition"
            >
              Book A Repair
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <RepairFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
