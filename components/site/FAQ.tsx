const faqs = [
  {
    q: "Is Theater free?",
    a: "Theater is permanently free and ad-free. No trackers, no payments, and no data collection—ever.",
  },
  {
    q: "Which platforms are supported?",
    a: "Theater is launching first on Android, with full support for Mobile, Tablet, and TV. An iOS version is also in development to ensure a seamless experience across all your favorite devices.",
  },
  {
    q: "How is privacy handled?",
    a: "LA Curations follows a zero-tracking policy. Content is curated locally and privately, ensuring data remains exclusively with the user.",
  },
];

const FAQ = () => {
  return (
    <section className="pb-12 lg:pb-48 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-black text-2xl md:text-3xl text-black uppercase tracking-tighter">
            FAQ
          </h2>
          <p className="mt-2 text-gray-500 font-light">
            Answers to common questions.
          </p>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-gray-50/50">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 text-left">
              <h3 className="font-bold text-black">{f.q}</h3>
              <p className="mt-2 text-sm text-gray-600 font-light leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
