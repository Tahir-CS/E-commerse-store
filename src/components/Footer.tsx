
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full professional-footer text-foreground animate-fade-in-up">
    <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Shop
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ease
            </span>
          </span>
          <div className="h-4 w-0.5 bg-gradient-to-b from-primary to-purple-600 opacity-50"></div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Premium</span>
        </div>
        <nav className="flex gap-6 mt-2 md:mt-0 text-sm font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/cart" className="hover:text-primary transition-colors">Cart</Link>
          <Link to="/admin" className="hover:text-primary transition-colors">Admin</Link>
        </nav>
      </div>
      <div className="text-xs text-muted-foreground text-center md:text-right">
        &copy; {new Date().getFullYear()} ShopEase. <span className="hidden md:inline">All rights reserved.</span>
        <div className="flex justify-center md:justify-end gap-3 mt-2">
          <a href="#" className="hover:text-primary transition-colors" title="Twitter"><svg className="inline-block h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22.46 6c-.77.35-1.61.59-2.49.7a4.07 4.07 0 001.81-2.28 8.14 8.14 0 01-2.6.99A4.06 4.06 0 0016 4c-2.27 0-4.1 1.85-4.1 4.11 0 .32.03.64.11.94C8 8.9 5.12 7.52 3 5.34c-.36.62-.57 1.34-.57 2.1 0 1.46.73 2.74 1.85 3.48a3.82 3.82 0 01-1.86-.52v.05c0 2.05 1.45 3.76 3.36 4.15-.36.11-.74.16-1.13.16-.27 0-.54-.03-.8-.08.55 1.7 2.1 2.96 3.94 2.99A8.2 8.2 0 012 20.07c-.38 0-.75-.02-1.13-.07A11.6 11.6 0 006.29 22c7.54 0 11.68-6.24 11.68-11.65 0-.18 0-.36-.01-.54A8.18 8.18 0 0024 5.13c-.77.34-1.59.57-2.54.67z"/></svg></a>
          <a href="#" className="hover:text-primary transition-colors" title="Instagram"><svg className="inline-block h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><circle cx="12" cy="12" r="5" /><path d="M17 7h.01"/></svg></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
