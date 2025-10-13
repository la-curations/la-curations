const valueProps = [
  {
    key: "data",
    title: "Transparent Data, In Your Control",
    description:
      "We only collect what's needed to make the product work and improve your experience. Your data is portable and deletable.",
  },
  {
    key: "noads",
    title: "No Ads. Built For Users.",
    description:
      "We don't sell your attention. There are no tracking ads — monetization is user-supported (e.g., fair subscriptions).",
  },
  {
    key: "design",
    title: "Thoughtful, Tasteful Design",
    description:
      "Clean, modern interfaces that prioritize clarity, speed, and delight across every touchpoint.",
  },
];

function Icon({ name }: { name: string }) {
  if (name === "data") {
    // CircleStackIcon (outline 24) – inlined SVG approximation
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c-4.418 0-8 1.79-8 4s3.582 4 8 4 8-1.79 8-4-3.582-4-8-4Z" />
        <path d="M20 7v4c0 2.21-3.582 4-8 4s-8-1.79-8-4V7" />
        <path d="M20 11v4c0 2.21-3.582 4-8 4s-8-1.79-8-4v-4" />
      </svg>
    );
  }
  if (name === "noads") {
    // NoSymbolIcon (outline 24)
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M6 6l12 12" />
      </svg>
    );
  }
  // SparklesIcon (outline 24) – simplified
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 3l1.5 3.5L14 8l-3.5 1.5L9 13l-1.5-3.5L4 8l3.5-1.5L9 3Z" />
      <path d="M17 5l.75 1.75L19.5 7.5 17.75 8.25 17 10l-.75-1.75L14.5 7.5l1.75-.75L17 5Z" />
      <path d="M18 13l1 2.25L21.25 16l-2.25.75L18 19l-.75-2.25L15 16l2.25-.75L18 13Z" />
    </svg>
  );
}

const ValueProps = () => {
  return (
    <section id="about" className="py-12 lg:py-16 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-black text-2xl md:text-3xl text-white">About LA Curations</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            We build focused, refined products for people — with privacy, clarity, and taste at the core.
          </p>
          <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
            Our mission is to craft AI‑powered experiences that respect your time and your data.
          </p>
          <div className="mt-4">
            <a href="/privacy" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Read our privacy approach →
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((vp) => (
            <div
              key={vp.title}
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-white/10 p-2 text-white/90">
                  <Icon name={vp.key} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{vp.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{vp.description}</p>
                </div>
              </div>
              {/* subtle gradient sheen */}
              <div aria-hidden className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[radial-gradient(closest-side,_#ffffff26,_transparent)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
