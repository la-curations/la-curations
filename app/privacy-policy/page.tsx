import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy • LA Curations",
  description: "Our approach to privacy and data collection.",
};

export default function Privacy() {
  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Privacy Policy – LA Curations</h1>
      <p className="text-sm">Last updated: January 2, 2026</p>
      <p>
        LA Curations is an independent app publishing name used to release
        mobile applications on app stores. We respect user privacy and are
        committed to transparency.
      </p>
      <h2 className="text-xl font-bold">1. Scope of This Policy</h2>
      <p>
        This Privacy Policy applies only to the LA Curations website and general
        publisher-level information. Each mobile application published under the
        LA Curations name has its own app-specific Privacy Policy, which
        explains in detail: What data the app uses or accesses How third-party
        services are involved (if any) How users can manage or delete their data
        Please refer to the specific app’s page for its Privacy Policy.
      </p>
      <h2 className="text-xl font-bold">2. Website Data Collection</h2>
      <p>
        {" "}
        The LA Curations website: Does not require user accounts Does not
        collect personal information Does not use tracking cookies or
        advertising trackers Basic server logs (such as IP address or request
        metadata) may be processed by the hosting provider for security and
        performance purposes.
      </p>
      <h2 className="text-xl font-bold">
        3. Applications Published by LA Curations
      </h2>
      <p>
        Applications published by LA Curations are designed to be:
        Privacy-focused Ad-free (unless explicitly stated otherwise in the app
        policy) Transparent about data usage Details about data handling,
        permissions, and third-party services are disclosed within each app’s
        own Privacy Policy.{" "}
      </p>{" "}
      <h2 className="text-xl font-bold">4. Third-Party Services</h2>
      <p>
        {" "}
        The LA Curations website may be hosted using third-party infrastructure
        providers (such as Vercel) for content delivery and uptime. LA Curations
        does not control how these providers process infrastructure-level data.{" "}
      </p>{" "}
      <h2 className="text-xl font-bold">5. Children’s Privacy</h2>
      <p>
        {" "}
        LA Curations does not knowingly collect personal information from
        children under the age of 13 through its website.{" "}
      </p>{" "}
      <h2 className="text-xl font-bold">6. Changes to This Policy</h2>
      <p>
        {" "}
        This Privacy Policy may be updated occasionally to reflect changes in
        apps, services, or legal requirements. Updates will be posted on this
        page with a revised date.{" "}
      </p>{" "}
      <h2 className="text-xl font-bold">7. Contact</h2>
      <p>
        {" "}
        If you have questions about this Privacy Policy or about LA Curations,
        you can contact: Email: la.curations@gmail.com Website:{" "}
        <a href="https://lacurations.vercel.app">
          https://lacurations.vercel.app
        </a>
      </p>
    </main>
  );
}
