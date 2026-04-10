import Image from "next/image";

const MyCalendar = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Image
            src="/assets/images/theater/F4.webp"
            alt="My Calendar - Release notifications and schedule"
            width={400}
            height={400}
            className="max-w-[80%] mx-auto object-contain relative z-10 lg:order-2"
          />
          <div className="text-center lg:text-left lg:order-1">
            <h2 className="text-4xl bg-clip-text text-transparent bg-linear-to-r from-[#8e27ee] to-[#FF5E87] font-black">
              My Calendar
            </h2>
            <p className="text-lg lg:text-2xl mb-6 text-[#ffffff] opacity-70">
              Never miss a release
            </p>
            <p className="text-lg lg:text-xl text-white/40 leading-relaxed">
              Schedule released movies or get notified for upcoming ones. Manage
              your cinematic timeline with precision and get timely
              notifications sent directly to your device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCalendar;
