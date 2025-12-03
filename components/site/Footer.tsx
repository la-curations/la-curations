import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-white">
      <img
        src="/assets/images/LA/footer.png"
        alt="LA Curations Logo"
        className="w-[100px] lg:w-[300px] h-auto absolute left-0 bottom-0"
      />
      <div className="w-screen h-[1px] bg-gradient-to-r from-transparent via-[#c6c6c665] to-transparent"></div>

      <div className="flex items-center justify-center gap-8 lg:p-20 pt-10">
        <Link
          href="/privacy"
          className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
        >
          Privacy
        </Link>
        <Link
          href="/terms"
          className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
        >
          Terms
        </Link>
        <a
          href="mailto:la.curations@gmail.com"
          className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
        >
          Contact
        </a>
      </div>

      <div className="text-xs lg:text-sm text-gray-400 lg:absolute lg:bottom-0 lg:right-0 lg:p-20 text-center pt-5 pb-10">
        © {new Date().getFullYear()} LA Curations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
