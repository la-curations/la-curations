import React from "react";

const AndMore = () => {
  return (
    <section className="w-full py-12 lg:py-16 px-4">
      <div className=" max-w-7xl mx-auto flex items-center justify-center">
        <div className="relative">
          <h2 className="relative text-4xl lg:text-6xl xl:text-7xl font-black text-white">
            and more...
          </h2>
          <div className="h-full w-[90%] bg-gradient-to-r from-transparent to-[#000013] absolute top-0 -right-10 z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AndMore;
