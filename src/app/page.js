import Template from "@/components/layouts/Template";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";

export default function HomePage() {
  return (
    <Template>
      <Hero />
      {/* About and Skills */}
      <Projects/>
    </Template>
  );
}
