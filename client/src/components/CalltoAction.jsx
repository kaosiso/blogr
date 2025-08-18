import React from "react";

const CalltoAction = () => {
  return (
    <div>
      <div className="text-center py-12 border-t border-gray-200">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Let's get started on something great
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
          Start your free trial today. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors">
            Learn more
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalltoAction;
