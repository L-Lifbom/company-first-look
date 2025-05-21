
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white/95 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              Wonlik
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-slate-700 hover:text-accent transition-colors">
            About
          </a>
          {/* <a href="#products" className="text-sm font-medium text-slate-700 hover:text-accent transition-colors">
            Products
          </a> */}
          <a href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-accent transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-accent transition-colors">
            Contact
          </a>
        </nav>
      
        
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-white md:hidden",
          mobileMenuOpen ? "flex flex-col pt-20 px-4" : "hidden"
        )}
      >
        <nav className="flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-lg font-medium py-2 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          {/* <a 
            href="#products" 
            className="text-lg font-medium py-2 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </a> */}
          <a 
            href="#testimonials" 
            className="text-lg font-medium py-2 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium py-2 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="pt-4 flex flex-col space-y-4">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
