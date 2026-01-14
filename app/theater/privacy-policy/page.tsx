import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Theater App",
  description: "Privacy Policy for Theater App by LA Curations.",
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPolicy = () => {
  return (
    <div className=" bg-white text-black mx-auto font-serif p-5 lg:p-20 flex flex-col gap-2">
      <h1 className="text-5xl">Privacy Policy</h1>
      <p>Effective Date: January 2, 2026</p>

      <p>
        THEATER is a privacy-first movie and TV discovery application. We are
        committed to protecting your privacy and being transparent about how
        data is handled.
      </p>

      <h2 className="text-2xl mt-5">1. Data We Collect</h2>
      <p>
        THEATER does not collect, store, or sell personal data on our servers.
      </p>
      <p>All user data is stored locally on your device only, including:</p>
      <ul>
        <li>Watchlists and collections</li>
        <li>Saved filters and preferences</li>
        <li>Calendar reminders</li>
        <li>Cached movie and TV metadata</li>
        <li>Device settings and preferences</li>
      </ul>
      <p>THEATER does not require account creation.</p>

      <h2 className="text-2xl mt-5">2. Third-Party Data Sources</h2>
      <p>
        THEATER uses public movie and TV metadata provided by The Movie Database
        (TMDB). This data may include titles, descriptions, posters, release
        dates, genres, ratings, and trailers etc.
      </p>

      <h2 className="text-2xl mt-5">3. Optional AI Features</h2>
      <p>THEATER offers optional AI-powered features such as:</p>
      <ul>
        <li>AI search and filtering</li>
        <li>Mood-based recommendations</li>
        <li>Watchlist insights and trivia</li>
      </ul>
      <p>
        To use these features, users may optionally provide their own AI
        provider API key.
      </p>
      <p>Important notes:</p>
      <ul>
        <li>The API key is stored securely on your device only</li>
        <li>The key is never uploaded, logged, or shared by THEATER</li>
        <li>
          AI requests are sent directly from your device to the AI provider
        </li>
        <li>You can remove the API key at any time from app settings</li>
      </ul>
      <p>
        AI features are fully optional and the app remains usable without them.
      </p>

      <h2 className="text-2xl mt-5">4. Advertising & Tracking</h2>
      <p>THEATER:</p>
      <ul>
        <li>Does not show ads</li>
        <li>Does not use trackers</li>
        <li>Does not sell user data</li>
        <li>Does not perform cross-app tracking</li>
      </ul>

      <h2 className="text-2xl mt-5">5. Data Retention & Deletion</h2>
      <p>Since all data is stored locally:</p>
      <ul>
        <li>
          You can delete your data at any time by clearing app data or
          uninstalling the app
        </li>
        <li>API keys can be manually removed from settings</li>
      </ul>

      <h2 className="text-2xl mt-5">6. Children’s Privacy</h2>
      <p>
        THEATER is not directed toward children under 13 and does not knowingly
        collect data from children.
      </p>

      <h2 className="text-2xl mt-5">7. Changes to This Policy</h2>
      <p>
        This Privacy Policy may be updated occasionally. Any changes will be
        reflected in the app and on the policy page.
      </p>

      <h2 className="text-2xl mt-5">8. Contact Us</h2>
      <p>
        If you have any questions, contact us at: Email:{" "}
        <strong>la.curations@gmail.com</strong> Website:{" "}
        <a href="https://lacurations.vercel.app">
          https://lacurations.vercel.app
        </a>
      </p>

      <p>Thank you for using Theater!</p>
    </div>
  );
};

export default PrivacyPolicy;
