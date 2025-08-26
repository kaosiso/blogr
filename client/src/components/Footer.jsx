import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 bg-transparent w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Column 1: Logo & description */}
          <div className="flex flex-col">
            <Link
              to="/"
              className="flex items-center gap-3 text-2xl font-bold"
            >
              <Image
                src="logo.png"
                alt="Blogr"
                w={32}
                h={32}
                className="w-8 h-8"
              />
              <span>blogr</span>
            </Link>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Design and photography for the modern creative.
            </p>
          </div>

          {/* Other columns: stack vertically on mobile, horizontally on md+ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 flex-1">
            {/* Product */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Product
              </h5>
              <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-gray-900">Overview</a></li>
                <li><a href="#" className="hover:text-gray-900">Features</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Company
              </h5>
              <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Resources
              </h5>
              <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Support</a></li>
                <li><a href="#" className="hover:text-gray-900">Docs</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Social
              </h5>
              <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 text-center text-gray-400 text-xs sm:text-sm">
          &copy; 2024 Blogr. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
