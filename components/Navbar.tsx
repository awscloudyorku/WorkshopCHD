import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#131921] text-white border-b border-neutral-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          AWS Amplify Workshop
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm">

          <Link href="#overview" className="hover:text-[#ff9900] transition-colors">
            Overview
          </Link>

          <Link href="#deployment" className="hover:text-[#ff9900] transition-colors">
            Deployment Flow
          </Link>

          <Link href="#architecture" className="hover:text-[#ff9900] transition-colors">
            Architecture
          </Link>

          <a
            href="https://github.com/awscloudyorku/WorkshopCHD"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff9900] transition-colors"
          >
            GitHub
          </a>

          {/* CTA */}
          <a
            href="https://github.com/awscloudyorku/WorkshopCHD"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#ff9900] px-4 py-2 font-semibold text-black hover:bg-[#e68a00] transition"
          >
            Use Template
          </a>

        </div>

      </div>
    </nav>
  );
}
