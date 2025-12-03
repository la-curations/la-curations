import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy • LA Curations",
  description: "Our approach to privacy and data collection.",
};

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-black text-3xl md:text-4xl text-white">
        Privacy at LA Curations
      </h1>
      <p className="mt-3 text-gray-400">
        We build products that respect your time and your data. This page
        outlines our current approach and commitments. We will keep this page
        updated as our products evolve.
      </p>

      <section className="mt-10 space-y-6 text-sm text-gray-300">
        <div>
          <h2 className="text-white font-semibold">Data collection</h2>
          <p className="mt-2">
            We collect the minimum data necessary to deliver and improve the
            product. Examples include account basics, app preferences, and usage
            signals that help us improve recommendations. Whenever possible, we
            process data on the server and avoid collecting raw content.
          </p>
        </div>
        <div>
          <h2 className="text-white font-semibold">Your control</h2>
          <p className="mt-2">
            You can request a copy of your data and ask for deletion. We aim to
            make export and deletion simple and fast.
          </p>
        </div>
        <div>
          <h2 className="text-white font-semibold">No ads / user-supported</h2>
          <p className="mt-2">
            We do not sell your attention. There are no tracking ads. No
            monetization.
          </p>
        </div>
        <div>
          <h2 className="text-white font-semibold">Security</h2>
          <p className="mt-2">
            We use industry-standard security practices to protect your data.
            Access to production data is limited and audited.
          </p>
        </div>
        <div>
          <h2 className="text-white font-semibold">Contact</h2>
          <p className="mt-2">
            Have questions? Reach us at{" "}
            <a
              className="underline hover:text-white"
              href="mailto:la.curations@gmail.com"
            >
              la.curations@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
