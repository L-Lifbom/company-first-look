
import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">YourLogo</h3>
            <p className="text-slate-300 mb-4">
              Excellence in product solutions since 2023.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Product One
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Product Two
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Product Three
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Product Four
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@yourcompany.com" className="text-slate-300 hover:text-white transition-colors">
                    info@yourcompany.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-slate-300 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <p className="text-slate-300">
                    123 Business St.<br />City, State 12345
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
