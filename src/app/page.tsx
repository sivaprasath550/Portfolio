import AnimatedBackground from "@/components/AnimatedBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import Experience from "@/components/Experience";
import OpenSource from "@/components/OpenSource";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Signals from "@/components/Signals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <main id="main-content" className="relative z-10">
        <Hero />
        <SectionDivider className="my-0" />
        <About />
        <SectionDivider className="my-0" />
        <Experience />
        <SectionDivider className="my-0" />
        <OpenSource />
        <SectionDivider className="my-0" />
        <Work />
        <SectionDivider className="my-0" />
        <Stack />
        <SectionDivider className="my-0" />
        <Signals />
        <SectionDivider className="my-0" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
