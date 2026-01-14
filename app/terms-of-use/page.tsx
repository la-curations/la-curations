import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use • LA Curations",
  description:
    "Terms and conditions for using LA Curations websites and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfUse() {
  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Terms of Use – LA Curations</h1>
      <p>Last updated: January 2, 2026</p>
      <p>
        These Terms of Use govern access to and use of the LA Curations website
        and general publisher information.
      </p>
      <p>By accessing this website, you agree to these Terms.</p>
      <h2 className="text-xl font-bold">1. About LA Curations</h2>
      <p>
        LA Curations is an independent app publishing name used to release
        mobile applications on app stores. LA Curations is not a registered
        company or legal entity. Applications published under the LA Curations
        name may have their own app-specific Terms of Use and Privacy Policies,
        which apply when using those applications.
      </p>
      <h2 className="text-xl font-bold">2. Scope of These Terms</h2>
      <p>These Terms apply only to:</p>
      <ul>
        <li>The LA Curations website</li>
        <li>Publisher-level information and content</li>
      </ul>
      <p>
        They do not replace or override the Terms of Use or Privacy Policy of
        any individual app published by LA Curations. Please refer to each app’s
        page for app-specific terms.
      </p>
      <h2 className="text-xl font-bold">3. Website Usage</h2>
      <p>
        You agree to use the website only for lawful purposes. You must not:
      </p>
      <ul>
        <li>Attempt to disrupt or damage the website</li>
        <li>Attempt unauthorized access to servers or infrastructure</li>
        <li>Use the website in a way that violates applicable laws</li>
      </ul>
      <h2 className="text-xl font-bold">4. Intellectual Property</h2>
      <p>
        All content on this website, including text, logos, app descriptions,
        and branding, is owned by or licensed to LA Curations unless stated
        otherwise. You may not copy, reproduce, or redistribute website content
        without permission, except where allowed by law.
      </p>
      <h2 className="text-xl font-bold">5. Third-Party Services</h2>
      <p>
        The website may be hosted or delivered using third-party infrastructure
        providers (such as Vercel). LA Curations is not responsible for:
        Temporary downtime Infrastructure-level data processing performed by
        hosting providers
      </p>
      <h2 className="text-xl font-bold">6. Disclaimer</h2>
      <p>
        The website and its content are provided “as is”, without warranties of
        any kind. LA Curations makes no guarantees regarding: Accuracy or
        completeness of information Availability or uptime Suitability of
        information for a specific purpose
      </p>
      <h2 className="text-xl font-bold">7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, LA Curations shall not be liable
        for any damages arising from: Use or inability to use the website
        Reliance on website content Third-party services or links
      </p>
      <h2 className="text-xl font-bold">8. Changes to These Terms</h2>
      <p>
        These Terms may be updated occasionally. Changes will be posted on this
        page with an updated date.
      </p>
      <h2 className="text-xl font-bold">9. Contact</h2>
      <p>
        If you have questions about these Terms of Use, you can contact: Email:
        la.curations@gmail.com Website:{" "}
        <a href="https://lacurations.vercel.app">
          https://lacurations.vercel.app
        </a>
      </p>
    </main>
  );
}
