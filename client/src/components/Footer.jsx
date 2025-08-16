import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="py-12 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <span className="font-bold text-lg text-gray-800">
                Untitled UI
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Design and photography for the modern creative.
            </p>
          </div>
          {/* Column 2 */}
          <div className="md:col-span-1">
            <h5 className="font-semibold text-gray-900 mb-4">Product</h5>
            <ul className="space-y-2 text-gray-600 text-sm">
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
            <h5 className="font-semibold text-gray-900 mb-4">Company</h5>
            <ul className="space-y-2 text-gray-600 text-sm">
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
            <h5 className="font-semibold text-gray-900 mb-4">Resources</h5>
            <ul className="space-y-2 text-gray-600 text-sm">
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
            <h5 className="font-semibold text-gray-900 mb-4">Social</h5>
            <ul className="space-y-2 text-gray-600 text-sm">
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
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2024 Untitled UI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer
