import React from "react";
import Image from "../components/Image";

const projects = [
  {
    title: "VPN Mobile App",
    type: "Mobile UI, Research",
    image: "featured1.jpeg",
    likes: 517,
    views: "9.3k",
    tags: [],
  },
  {
    title: "Property Dashboard",
    type: "Web interface",
    image: "featured1.jpeg",
    likes: 983,
    views: "14k",
    tags: ["UI"],
  },
  {
    title: "Healthcare Mobile App",
    type: "Mobile UI, Branding",
    image: "featured1.jpeg",
    likes: 875,
    views: "13.5k",
    tags: ["UI", "Br"],
  },
];

const ProfilePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-8 sm:mb-10 gap-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <Image
            src="featured1.jpeg"
            alt="Profile"
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl object-cover"
          />
          <div>
            <div className="flex items-center gap-1 sm:gap-2">
              <h1 className="text-xl sm:text-2xl font-bold">Irene Brooks</h1>
              <span className="bg-blue-500 text-white px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-medium">
                PRO
              </span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">
              Interface and Brand Designer based in San Antonio
            </p>
            <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3">
              <button className="bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base">
                Follow
              </button>
              <button className="border px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
          <div className="text-center">
            <p className="font-bold text-lg sm:text-xl">2,985</p>
            <p className="text-gray-500 text-xs sm:text-sm">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg sm:text-xl">132</p>
            <p className="text-gray-500 text-xs sm:text-sm">Following</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg sm:text-xl">548</p>
            <p className="text-gray-500 text-xs sm:text-sm">Likes</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <ul className="flex gap-4 sm:gap-6 text-gray-600 text-sm sm:text-base overflow-x-auto">
          <li className="pb-2 border-b-2 border-black font-medium cursor-pointer whitespace-nowrap">
            Work
          </li>
          <li className="pb-2 cursor-pointer hover:text-black transition whitespace-nowrap">
            About
          </li>
        </ul>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              {project.tags.length > 0 && (
                <div className="absolute top-2 right-2 flex gap-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="font-semibold text-base sm:text-lg">
                {project.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                {project.type}
              </p>
              <div className="flex justify-between text-gray-500 text-xs sm:text-sm">
                <span>❤️ {project.likes}</span>
                <span>👁️ {project.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
