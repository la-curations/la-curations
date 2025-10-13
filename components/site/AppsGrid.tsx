import Image from "next/image";
import Link from "next/link";

const apps = [
  {
    name: "Theater",
    description: "AI-powered smarter streaming.",
    href: "/theater",
    icon: "/theater64.png",
    badge: "New",
  },
  // Add future apps here
];

const AppsGrid = () => {
  return (
    <section id="apps" className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="font-black text-2xl md:text-3xl text-white">Curated Apps</h2>
          <span className="text-xs text-gray-400">{apps.length} app(s)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.href}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden"
            >
              <div className="p-5 flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-white/5 p-2">
                  <Image src={app.icon} alt="" width={40} height={40} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white group-hover:underline underline-offset-4">
                      {app.name}
                    </h3>
                    {app.badge && (
                      <span className="text-[10px] uppercase tracking-wide rounded-md bg-green-500/10 text-green-400 px-2 py-0.5">
                        {app.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-400 line-clamp-2">
                    {app.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsGrid;
