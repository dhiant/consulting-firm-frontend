import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CTAButton = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <button
        onClick={() => router.push("/contact")}
        className="
      group relative overflow-hidden
      border-2 border-white/30 hover:border-white/60
      bg-transparent hover:bg-white/10
      px-8 py-4 
      flex items-center gap-3
      text-white font-medium
      transition-all duration-300
      rounded-lg
      hover:shadow-lg hover:shadow-white/20
    "
      >
        <span className="relative z-10">Contact Us</span>
        <MoveRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </button>
    </div>
  );
};

export default CTAButton;
