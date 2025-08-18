import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 overflow-x-hidden">
  

      {/* Published date */}
      <p className="text-gray-500 text-xs sm:text-sm md:text-base text-center">
        Published January 13, 2021
      </p>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-2">
        7 Rules of Effective Branding
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center mt-2">
        Why Branding matters to your Business
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {["Branding", "Communication", "Experience", "Identity"].map((tag) => (
          <span
            key={tag}
            className="px-3 sm:px-4 py-1 text-xs sm:text-sm md:text-base bg-gray-100 rounded-full text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Featured Image */}
      <div className="mt-6">
        <Image
          src="featured3.jpeg"
          alt="People collaborating in an office"
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl"
        />
      </div>

      {/* Social Share Buttons */}
      <div className="fixed top-1/3 right-4 sm:right-6 hidden lg:flex flex-col gap-4">
        <Link to="#">
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500 hover:text-blue-600" />
        </Link>
        <Link to="#">
          <Twitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500 hover:text-sky-500" />
        </Link>
        <Link to="#">
          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500 hover:text-blue-700" />
        </Link>
        <Link to="#">
          <Share2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500 hover:text-gray-900" />
        </Link>
      </div>

      {/* Post Content */}
      <div className="prose max-w-none mt-8">
        <p className="text-sm sm:text-base md:text-lg">
          <strong>
            Branding is your identity in the digital world that your clients use
            to differentiate you from other businesses.
          </strong>{" "}
          Your brand is your reputation and helps you to build trust with your
          clients.
        </p>

        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
          So, what makes a brand? A logo, a combination of colors, or a message?
          Everything that represents your business in your brand. It is an
          overall perception over your clients about your business.
        </p>

        <p className="text-sm sm:text-base md:text-lg">
          Everything in your brand design should relate to the purpose of your
          business. Your name, your colors, your style — all contribute to the
          bigger picture of how people perceive you.
        </p>
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          Comments
        </h2>

        {/* Comment Box */}
        <form className="space-y-4 mb-10">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border rounded-lg px-4 py-2 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            rows="4"
            placeholder="Write your comment..."
            className="w-full border rounded-lg px-4 py-2 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 text-sm sm:text-base md:text-lg rounded-lg hover:bg-gray-800 transition"
          >
            Post Comment
          </button>
        </form>

        {/* Existing Comments */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 border-b pb-4">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Jane Doe"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg">
                Jane Doe{" "}
                <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                  · Jan 14, 2021
                </span>
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Really loved this article, especially the part about trust.
                Super helpful!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b pb-4">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="Mark Smith"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg">
                Mark Smith{" "}
                <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                  · Jan 15, 2021
                </span>
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Thanks for sharing these rules. They are practical and easy to
                apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
