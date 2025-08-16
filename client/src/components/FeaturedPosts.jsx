import React from 'react'

const FeaturedPosts = () => {
  return (
    <div>
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Featured blog posts
          </h3>
          <a
            href="#"
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            View all posts
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Post 1 */}
          <div className="flex flex-col rounded-xl overflow-hidden">
            <img
              src="featured1.jpeg"
              alt="Man with camera"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-transparent flex flex-col items-start">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Interview with Photographer Tim Bate on His Creative Process
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                A simple and short description of the post...
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span className="text-gray-700 font-medium text-sm">
                  John Doe
                </span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">2 min read</span>
              </div>
            </div>
          </div>
          {/* Post 2 */}
          <div className="flex flex-col rounded-xl overflow-hidden">
            <img
              src="featured1.jpeg"
              alt="Design tools"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-transparent flex flex-col items-start">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Improve Your Design Skills with These 5 Tools
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                A guide to the best design software and apps...
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span className="text-gray-700 font-medium text-sm">
                  Jane Smith
                </span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">5 min read</span>
              </div>
            </div>
          </div>
          {/* Post 3 */}
          <div className="flex flex-col rounded-xl overflow-hidden ">
            <img
              src="featured1.jpeg"
              alt="Woman looking at her phone"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-transparent flex flex-col items-start">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                A Solopreneur's Guide to Building an Agency from Scratch
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Tips and tricks for solo business owners...
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span className="text-gray-700 font-medium text-sm">
                  Alex Johnson
                </span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">4 min read</span>
              </div>
            </div>
          </div>
          {/* Post 4 */}
          <div className="flex flex-col">
            <img
              src="featured1.jpeg"
              alt="Modern house"
              className="w-full h-auto object-cover rounded-xl mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              A Continuously Evolving History - Made by Hand
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A short description for post 4...
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-gray-700 font-medium text-xs">
                Mike Davis
              </span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-400 text-xs">3 min read</span>
            </div>
          </div>
          {/* Post 5 */}
          <div className="flex flex-col">
            <img
              src="featured1.jpeg"
              alt="Person on laptop"
              className="w-full h-auto object-cover rounded-xl mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              How Our Collaboration Makes Us Better Designers
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A short description for post 5...
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-gray-700 font-medium text-xs">
                Maria Garcia
              </span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-400 text-xs">6 min read</span>
            </div>
          </div>
          {/* Post 6 */}
          <div className="flex flex-col">
            <img
              src="featured1.jpeg"
              alt="Books and notebook"
              className="w-full h-auto object-cover rounded-xl mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Best Books on Scaling Your Early-stage Startup
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A short description for post 6...
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-gray-700 font-medium text-xs">
                Paul White
              </span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-400 text-xs">7 min read</span>
            </div>
          </div>
          {/* Post 7 */}
          <div className="flex flex-col">
            <img
              src="featured1.jpeg"
              alt="Woman in studio"
              className="w-full h-auto object-cover rounded-xl mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              How to Run a Successful Business With Your Partner
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A short description for post 7...
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-gray-700 font-medium text-xs">
                Jessica Lee
              </span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-400 text-xs">5 min read</span>
            </div>
          </div>
          {/* Post 8 */}
          <div className="flex flex-col">
            <img
              src="featured1.jpeg"
              alt="Food on a plate"
              className="w-full h-auto object-cover rounded-xl mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Why Food Matters - Disease Prevention & Treatment
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A short description for post 8...
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-gray-700 font-medium text-xs">
                Robert Brown
              </span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-400 text-xs">8 min read</span>
            </div>
          </div>
          {/* Post 9 */}
          <div className="flex flex-col">
            <img
              src="featured1.jpeg"
              alt="Two people talking"
              className="w-full h-auto object-cover rounded-xl mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Conversations with Landon Hair & Co.
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A short description for post 9...
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-gray-700 font-medium text-xs">
                Olivia Wilson
              </span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-400 text-xs">5 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts
