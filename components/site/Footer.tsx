const Footer = () => {
  return (
    <footer className="mt-32 border-t border-white/10 bg-gradient-to-b from-transparent to-[#0b0019] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="text-white font-black text-xl">LA Curations</div>
            <p className="mt-3 text-sm text-gray-400">Apps curated by LA Curations.</p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://x.com/lacurations"
                target="_blank"
                rel="noreferrer"
                aria-label="LA Curations on X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition"
                title="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                  <path d="M18.244 2.25h3.182l-6.956 7.938 8.18 11.562H16.21l-4.79-6.263-5.486 6.263H2.75l7.45-8.5L2.25 2.25h6.04l4.33 5.724 5.624-5.724Zm-1.116 18.5h1.762L7.954 3.597H6.07l11.058 17.153Z" />
                </svg>
              </a>
              <a
                href="https://github.com/lacurations"
                target="_blank"
                rel="noreferrer"
                aria-label="LA Curations on GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.019c0 4.428 2.865 8.187 6.839 9.504.5.092.683-.217.683-.482 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.156-1.111-1.465-1.111-1.465-.908-.621.069-.609.069-.609 1.004.071 1.532 1.032 1.532 1.032.893 1.53 2.343 1.087 2.913.832.091-.648.35-1.087.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.547 1.378.204 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.31.679.922.679 1.859 0 1.341-.012 2.423-.012 2.752 0 .267.18.578.688.48A10.026 10.026 0 0 0 22 12.019C22 6.486 17.523 2 12 2Z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="mailto:hello@lacurations.com"
                aria-label="Email LA Curations"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition"
                title="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                  <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm2.659-.75a.75.75 0 0 0-.534 1.282l7.091 6.818a.75.75 0 0 0 1.068 0l7.091-6.818A.75.75 0 0 0 19.591 6H4.159Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="/theater" className="hover:text-white">Theater</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="mailto:hello@lacurations.com" className="hover:text-white">Contact</a></li>
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
              <li><a href="/status" className="hover:text-white">System Status</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} LA Curations. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <span className="text-gray-600">•</span>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
