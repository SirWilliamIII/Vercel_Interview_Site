import aboutme from "public/aboutme.png";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      imgData={aboutme}
      imgAlt="aboutme"
      title="I Deliver Positive Business Outcomes"
    />
  );
}
