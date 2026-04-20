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
    <div className="bg-white text-black mx-auto font-serif p-5 lg:p-20 flex flex-col gap-2">
      <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
      <p>Effective Date: April 19, 2026</p>

      <p>
        <strong>THEATER</strong> is a movie and TV discovery application. The
        core principle of the application is to protect user privacy by ensuring
        that personal data remains on the user's device.
      </p>

      <h2 className="text-2xl mt-5 font-semibold">1. No Data Collection</h2>
      <p>
        THEATER does not collect, store, or transmit any personal or sensitive
        data to external servers. There is no backend database or server-side
        storage provided by the developer.
      </p>
      <p>
        All user-generated content and personalizations are stored{" "}
        <strong>locally on the device only</strong>, including:
      </p>
      <ul className="list-disc ml-8">
        <li>
          <strong>My Diary:</strong> Watch history, progress tracking for movies
          and series, personal ratings, emojis, and notes.
        </li>
        <li>
          <strong>Watchlists & Collections:</strong> Custom playlists and movie
          groups created by the user.
        </li>
        <li>
          <strong>My Calendar:</strong> Scheduled notifications and release
          reminders for upcoming content.
        </li>
        <li>
          <strong>My Filters:</strong> Saved search preferences and custom
          display filters.
        </li>
        <li>
          <strong>Region & Language:</strong> Manually selected country and
          language settings used for content customization.
        </li>
      </ul>
      <p>
        <strong>Cloud Synchronization:</strong> If you choose to enable Google
        Drive sync, our app will request access to your Google Drive account
        (specifically the drive.file scope). This is used solely to create a
        dedicated folder for Theater backups and to store your profile image. We
        do not access, read, or modify any other files in your Google Drive.
      </p>
      <p>
        <strong>Google API Service User Data Policy:</strong> Theater's use of
        information received from Google APIs will adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          className="text-blue-600 underline text-sm"
        >
          Google API Service User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <h2 className="text-2xl mt-5 font-semibold">
        2. Third-Party Data & API Keys
      </h2>
      <p>
        THEATER facilitates a direct connection between the device and
        third-party providers to provide movie metadata and AI features:
      </p>
      <ul className="list-disc ml-8">
        <li>
          <strong>TMDB:</strong> Movie and TV metadata is fetched using a
          free-tier API key.
        </li>
        <li>
          <strong>AI Features (Optional):</strong> If AI features are enabled,
          users provide their own Groq AI API key.
        </li>
      </ul>
      <p>
        <strong>Security Note:</strong> User-provided API keys are stored
        securely on the device only. Keys are never uploaded, logged, or shared
        by the application, and AI requests are sent directly from the device to
        the provider.
      </p>

      <h2 className="text-2xl mt-5 font-semibold">3. Location Privacy</h2>
      <p>
        THEATER does not track location via IP address or GPS. Users manually
        select a region within the application to see local content. This
        selection is stored only on the local device.
      </p>

      <h2 className="text-2xl mt-5 font-semibold">
        4. Advertising & Monetization
      </h2>
      <p>THEATER is a non-monetized project:</p>
      <ul className="list-disc ml-8">
        <li>No advertisements are displayed anywhere in the app.</li>
        <li>No third-party tracking scripts or analytics are utilized.</li>
        <li>No user data is sold or shared for marketing purposes.</li>
      </ul>

      <h2 className="text-2xl mt-5 font-semibold">
        5. Data Retention & Deletion
      </h2>
      <p>
        Since all data is stored locally, users maintain complete control over
        the information. Data, including the Diary and API keys, can be deleted
        at any time by:
      </p>
      <ul className="list-disc ml-8">
        <li>Clearing the application storage in device settings.</li>
        <li>Uninstalling the application.</li>
      </ul>

      <h2 className="text-2xl mt-5 font-semibold">6. Children’s Privacy</h2>
      <p>
        THEATER does not knowingly collect or maintain any data from any users,
        including children.
      </p>

      <h2 className="text-2xl mt-5 font-semibold">7. Contact Information</h2>
      <p>
        For questions regarding this privacy policy or application
        functionality:
        <br />
        Email: <strong>la.curations@gmail.com</strong>
        <br />
        Website:{" "}
        <a
          href="https://www.lacurations.co.in"
          className="text-blue-600 underline text-sm"
        >
          https://www.lacurations.co.in
        </a>
      </p>

      <p className="mt-10 italic text-gray-600">Thank you for using THEATER.</p>
    </div>
  );
};

export default PrivacyPolicy;
