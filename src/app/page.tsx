import landingImg from "public/landing.png";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero imgData={landingImg} imgAlt="landingImg" title="I love NextJS" />
  );
}
