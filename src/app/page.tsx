import homeImg from "public/performance.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="Professional Services"
    />
  );
}
