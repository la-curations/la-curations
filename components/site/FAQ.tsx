const faqs = [
  {
    q: "Is Theater free?",
    a: "We offer a free tier during early access. Pricing will be announced soon.",
  },
  { q: "Which platforms do you support?", a: "Web-first. Native apps are on the roadmap." },
  {
    q: "How do you handle privacy?",
    a: "We minimize data collection and aim for transparent, user-first design.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-black text-2xl md:text-3xl text-white">FAQ</h2>
          <p className="mt-2 text-gray-400">Answers to common questions.</p>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 text-left">
              <h3 className="font-semibold text-white">{f.q}</h3>
              <p className="mt-2 text-sm text-gray-400">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
