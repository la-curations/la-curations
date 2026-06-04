const faqs = [
  {
    q: "What is the philosophy behind LA Curations?",
    a: "LA Curations is an independent software studio built on the principles of absolute privacy, serverless architecture, and premium user-centered design. The goal is to create elegant, tracker-free software that respects user privacy and remains completely free of ads, tracking, and subscription paywalls.",
  },
  {
    q: "Who is behind LA Curations?",
    a: "LA Curations is not a registered company or a team. It is a solo, independent software project built, coded, and designed entirely by Leo Antony - a solo developer with a vision of creating premium, privacy-focused apps that stand out from typical data-collecting software.",
  },
  {
    q: "What does the \"Bring Your Own Key\" (BYOK) approach mean?",
    a: "To provide advanced features (such as AI reasoning or global database searches) without charging subscription fees or running expensive central servers, these apps utilize a Bring Your Own Key approach. Users can link their own free API keys (like Groq or TMDB) to utilize their personal free quotas directly. This guarantees private, direct access to the services without a middleman.",
  },
  {
    q: "Where is my data stored?",
    a: "Exclusively on your own device. Because there are no central servers or databases to harvest user information, your data stays yours. You can choose to sync it privately to your own personal Google Drive (if the app supports it) or export it to a CSV file at any time, ensuring it never leaves your control.",
  },
  {
    q: "Will there ever be ads or subscriptions?",
    a: "Never. Since these apps run serverless and directly on your own device using the BYOK model, there are no backend server costs to pass on. This structure guarantees that the apps remain permanently ad-free, subscription-free, and operational forever.",
  },
  {
    q: "What happens if a service or API key is terminated?",
    a: "Because the apps allow you to connect your own free API keys, you are not dependent on any single developer or provider. If a default service key is deactivated or reaches its limit, you can simply swap it for your own key in the app settings, allowing you to use the app indefinitely.",
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
