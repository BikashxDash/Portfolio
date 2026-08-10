import Nav from "@/components/Nav"
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

export default function Home() {
  return (
    <main className="bg-bg">
      <Nav />
      <Hero />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <BackToTop/>

    </main>
  );
}

