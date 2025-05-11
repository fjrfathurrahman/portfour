import Template from "@/components/layouts/Template";
import About from "@/components/pages/About";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";

export default function HomePage() {
  return (
    <Template>
      <Hero />
      <About/>
      <Projects/>
    </Template>
  );
}
