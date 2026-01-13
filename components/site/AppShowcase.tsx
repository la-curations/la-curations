import Image from "next/image";
import Link from "next/link";

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
        aria-label="View Theater App - AI-Powered Smarter Streaming"
      >
        <img
          src="/assets/images/LA/curve.webp"
          alt="Curve"
          className="absolute -top-[1px] w-[calc(100%-40px)] lg:w-[calc(100%-80px)] object-contain"
        />
        <div className="w-full flex flex-col gap-6 text-center items-center justify-center h-full">
          <Image
            src="/assets/images/theater/theater-title.webp"
            alt="Theater by LA Curations"
            width={800}
            height={200}
            className="object-contain w-[70%] lg:w-[50%]"
          />
          <p className="text-sm lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#306bff] to-[#ff16d0]">
            AI-Powered Smarter Streaming
          </p>
        </div>
        <img
          src="/assets/images/LA/curve.webp"
          alt="Curve"
          className="absolute -bottom-[1px] w-[calc(100%-40px)] lg:w-[calc(100%-80px)] object-contain rotate-180"
        />
      </a>
      <Link
        href="/theater"
        className="mx-auto max-w-max lg:hidden px-6 py-3 text-xs bg-gradient-to-r from-[#b162ff] to-[#ff16d0] text-white flex items-center justify-center rounded-[100px]"
      >
        Experience Now
      </Link>
    </>
  );
};

export default AppShowcase;
