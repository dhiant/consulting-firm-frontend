import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main loading container */}
      <div className="flex flex-col items-center space-y-6 p-8">
        {/* Company logo with pulse animation */}
        <div className="relative">
          <Image
            alt="Company Logo"
            src="/images/company_logo.png"
            height={80}
            width={120}
            className="animate-pulse"
          />
          {/* Glowing effect around logo */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
