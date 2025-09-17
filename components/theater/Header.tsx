import Image from "next/image";
import React from "react";
import la from "../../public/la-theater64.png";
import theater from "../../public/theater64.png";

const Header = () => {
  return (
    <header>
      <div className="w-[80vw] bg-[#ffffff18] bg-opacity-50 backdrop-blur-md flex items-center justify-between fixed mt-10 mx-[10vw] rounded-full py-2">
        <Image src={theater} alt="Theater" className="ml-5" />
        <button className="bg-gradient-to-r from-[#6702f6] to-[#fa037f] text-white font-bold px-6 py-3 rounded-full text-xs mr-5 cursor-pointer transition">
          Get App
        </button>
      </div>
    </header>
  );
};

export default Header;
