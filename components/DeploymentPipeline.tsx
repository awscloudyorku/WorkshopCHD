export default function DeploymentPipeline() {
  const steps = [
    {
      title: "Push Code",
      description: "Develop locally and push your app to GitHub.",
      icon: "📦",
    },
    {
      title: "Amplify Builds",
      description: "Amplify automatically builds and deploys your app.",
      icon: "⚙️",
    },
    {
      title: "Preview & Test",
      description: "Preview environments created for every pull request.",
      icon: "🔍",
    },
    {
      title: "Live Deployment",
      description: "Your app is deployed globally with AWS infrastructure.",
      icon: "🚀",
    },
  ];

  return (
    <section className="w-full bg-[#0B1420] border-t border-[#1B2635]">
      <div className="mx-auto max-w-6xl px-6 py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Deployment Pipeline Workflow
          </h2>

          <p className="mt-4 text-[#9BA7B4]">
            From GitHub commit to global deployment using AWS Amplify CI/CD
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">

          {/* connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff9900]/40 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10">

              <div className="
                w-[260px]
                rounded-xl
                bg-gradient-to-b
                from-[#131E2B]
                to-[#0B1420]
                border border-[#1B2635]
                p-6
                text-center
                shadow-lg
                hover:border-[#ff9900]/60
                hover:shadow-[0_0_20px_rgba(255,153,0,0.15)]
                transition-all
              ">

                {/* icon */}
                <div className="text-3xl mb-3">
                  {step.icon}
                </div>

                {/* title */}
                <h3 className="text-white font-semibold mb-2">
                  {i + 1}. {step.title}
                </h3>

                {/* description */}
                <p className="text-sm text-[#9BA7B4]">
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
