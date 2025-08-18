import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-bold"
          >
            <Image
              src="logo.png"
              alt="Blogr Logo"
              w={32}
              h={32}
              className="w-8 h-8"
            />
            <span>blogr</span>
          </Link>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            Design and photography for the modern creative.
          </p>
        </div>

        {/* Column 2 */}
        <div className="md:col-span-1">
          <h5 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base md:text-lg">
            Product
          </h5>
          <ul className="space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
            <li>
              <a href="#" className="hover:text-gray-900">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:col-span-1">
          <h5 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base md:text-lg">
            Company
          </h5>
          <ul className="space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
            <li>
              <a href="#" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="md:col-span-1">
          <h5 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base md:text-lg">
            Resources
          </h5>
          <ul className="space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
            <li>
              <a href="#" className="hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Docs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="md:col-span-1">
          <h5 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base md:text-lg">
            Social
          </h5>
          <ul className="space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
            <li>
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-xs sm:text-sm md:text-base">
        &copy; 2024 Untitled UI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
