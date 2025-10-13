import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#9500ff1a] to-[#ff00ae1a] p-8 md:p-10">
          <div className="relative z-10">
            <h2 className="font-black text-2xl md:text-3xl text-white">Try Theater today</h2>
            <p className="mt-2 text-gray-300 max-w-xl">
              Discover your next watch with AI-powered, tasteful recommendations.
            </p>
            <div className="mt-6">
              <Link
                href="/theater"
                className="rounded-xl bg-white text-[#0b0019] px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition"
              >
                Open Theater
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
