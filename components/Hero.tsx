export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#232f3e] to-[#131921] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">

        <p className="mb-4 text-sm font-medium text-[#ff9900]">
          AWS Cloud Club @ York University · CTRL+HACK+DEL 2.0
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          Deploy a Full-Stack App Using AWS Amplify
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
          Learn the real deployment workflow used in modern engineering teams.
          This workshop walks through connecting GitHub to AWS Amplify,
          triggering automated builds, generating preview deployments,
          and deploying a full-stack application to production.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {/* Opens workshop PDF */}
          <a
            href="/AWS%20Club%20Workshop%20Demo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#ff9900] px-6 py-3 font-semibold text-black hover:bg-[#e68a00] transition"
          >
            View Workshop Demo PDF
          </a>

          {/* Opens GitHub repo */}
          <a
            href="https://github.com/awscloudyorku/WorkshopCHD"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-neutral-600 px-6 py-3 font-semibold hover:bg-neutral-800 transition"
          >
            Open GitHub Repository
          </a>

        </div>

        <div className="mt-10 text-sm text-neutral-400">
          GitHub → Amplify CI/CD → Preview Builds → Production Deployment
        </div>

      </div>
    </section>
  );
}
