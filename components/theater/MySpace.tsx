import React from "react";

const MySpace = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8aabff] to-[#f863da]">
                My Space
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 font-semibold mb-6">
              Personalize your app content
            </p>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
              Now you can save your own filters and customize a whole screen with your saved filters in the My Filters screen
            </p>
          </div>

          {/* Right side - Mobile phone mockup */}
          <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-xs">
              <div className="relative w-56 h-[32rem] bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800/50 p-2">
                <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                  {/* Movie poster with settings icon */}
                  <div className="w-full h-2/3 bg-gradient-to-br from-red-900/50 to-black relative">
                    <div className="absolute top-4 right-4 w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySpace;

