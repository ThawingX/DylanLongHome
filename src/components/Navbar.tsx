"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-xl md:text-2xl font-bold text-black">AI 产品经理</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="font-medium hover:text-[#FCD40B] transition-colors">首页</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="font-medium hover:text-[#FCD40B] transition-colors">关于</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="font-medium hover:text-[#FCD40B] transition-colors">项目</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="font-medium hover:text-[#FCD40B] transition-colors">联系</a>
            <Button size="sm" className="font-bold">简历下载</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                className="block px-3 py-2 rounded-md font-medium hover:bg-[#FCD40B] transition-colors"
              >
                首页
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className="block px-3 py-2 rounded-md font-medium hover:bg-[#FCD40B] transition-colors"
              >
                关于
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className="block px-3 py-2 rounded-md font-medium hover:bg-[#FCD40B] transition-colors"
              >
                项目
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="block px-3 py-2 rounded-md font-medium hover:bg-[#FCD40B] transition-colors"
              >
                联系
              </a>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full font-bold">简历下载</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 