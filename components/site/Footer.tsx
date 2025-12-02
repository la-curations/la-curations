import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="LA Curations Logo"
              width={32}
              height={32}
              className="w-8 h-8 opacity-80"
            />
            <span className="text-sm font-semibold text-gray-900 leading-4">
              LA
              <br />
              Curations
            </span>
          </div>

          <div className="flex items-center gap-8">
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

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} LA Curations. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
