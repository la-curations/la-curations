import Image from "next/image";
import Link from "next/link";
import theaterTitle from "../../public/theater-title.png";

const AppShowcase = () => {
  return (
    <>
      {/* <div className="w-screen mt-56 h-[100px] bg-gradient-to-b from-white to-[#000013]"></div> */}
      <div className="w-screen relative flex flex-col items-center justify-center">
        <p className="text-5xl md:text-7xl lg:text-[128px] text-center font-black text-[#6767674a]">
          INTRODUCING
        </p>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
      <a
        href="/theater"
        id="showcase"
        className="relative max-w-[90%] mx-auto lg:py-56 md:py-24 py-12 my-12 bg-[#000013] flex flex-col items-center justify-center rounded-[20px] lg:rounded-[40px]"
      >
        <img
          src="/assets/images/LA/curve.png"
          alt="Curve"
          className="absolute top-0 w-[calc(100%-40px)] lg:w-[calc(100%-80px)] object-contain"
        />
        <div className="w-full flex flex-col gap-6 text-center items-center justify-center h-full">
          <Image
            src={theaterTitle}
            alt="Theater Hero"
            className="object-contain w-[70%] lg:w-[50%]"
          />
          <p className="text-sm lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#306bff] to-[#ff16d0]">
            AI-Powered Smarter Streaming
          </p>
        </div>
        <img
          src="/assets/images/LA/curve.png"
          alt="Curve"
          className="absolute bottom-0 w-[calc(100%-40px)] lg:w-[calc(100%-80px)] object-contain rotate-180"
        />
      </a>
      {/* <div className="w-screen h-[500px] bg-gradient-to-b from-[#000013] to-transparent"></div> */}
      {/* <div className="flex items-center justify-center -mt-10">
        <img
          src="/assets/images/LA/arc.png"
          alt="Arc"
          className="object-contain w-[25%]"
        />
      </div> */}
    </>
  );
};

export default AppShowcase;
