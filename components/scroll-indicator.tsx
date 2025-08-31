import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
