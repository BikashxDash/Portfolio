import Nav from "@/components/Nav"
import Hero from "@/components/hero/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="bg-bg">
      <Nav />
      <Hero />
      <Skills />
      <Work />
      
    </main>
  );
}

