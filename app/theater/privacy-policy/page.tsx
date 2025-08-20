import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" bg-white text-black mx-auto font-serif p-5 lg:p-20 flex flex-col gap-2">
      <h1 className="text-5xl">Privacy Policy</h1>
      <p>Effective Date: August 20, 2025</p>

      <p>
        Theater ("we", "our", or "us") respects your privacy. This Privacy
        Policy describes how we collect, use, and disclose your information when
        you use our app.
      </p>

      <h2 className="text-2xl mt-5">1. Information We Collect</h2>
      <p>
        We do not collect any personal information directly. However, we may
        collect anonymous usage data such as:
      </p>
      <ul>
        <li>Device type and OS version</li>
        <li>App version and settings</li>
        <li>Anonymous app interaction data</li>
      </ul>

      <h2 className="text-2xl mt-5">2. Third-Party Services</h2>
      <p>
        We use the following third-party services that may collect information:
      </p>
      <ul>
        <li>
          <strong>The Movie Database (TMDB)</strong> – to fetch movie and series
          data
        </li>
        <li>
          <strong>Gemini AI</strong> – to provide online AI responses
        </li>
        <li>
          <strong>Analytics tools</strong> (e.g., Firebase Analytics) – for app
          improvement
        </li>
      </ul>
      <p>Please refer to their privacy policies for more details.</p>

      <h2 className="text-2xl mt-5">3. How We Use Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Improve app features and user experience</li>
        <li>Respond to AI queries</li>
      </ul>

      <h2 className="text-2xl mt-5">4. Data Retention</h2>
      <p>
        We do not store any personally identifiable information. Anonymous
        analytics data is retained as per third-party policies.
      </p>

      <h2 className="text-2xl mt-5">5. Your Rights</h2>
      <p>
        You can uninstall the app anytime. For third-party service data, refer
        to their respective opt-out options.
      </p>

      <h2 className="text-2xl mt-5">6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version
        will be available here.
      </p>

      <h2 className="text-2xl mt-5">7. Contact Us</h2>
      <p>
        If you have any questions, contact us at:{" "}
        <strong>la.curations@gmail.com</strong>
      </p>

      <p>Thank you for using Theater!</p>
    </div>
  );
};

export default PrivacyPolicy;
