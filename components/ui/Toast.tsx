"use client";

import React from "react";

interface ToastProps {
  isVisible: boolean;
  message: string;
}

const Toast = ({ isVisible, message }: ToastProps) => {
  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-100 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl">
        <div className="w-2 h-2 bg-[#f863da] rounded-full animate-pulse"></div>
        <p className="text-white text-sm font-medium tracking-wide">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Toast;
