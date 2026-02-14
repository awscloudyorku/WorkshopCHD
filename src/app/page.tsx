import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import DeploymentPipeline from "../../components/DeploymentPipeline";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1111]">

      <Navbar />

      <Hero />

      <DeploymentPipeline />

      <Footer />

    </main>
  );
}
