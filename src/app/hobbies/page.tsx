import reptileImg from "public/reptile.png";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgData={reptileImg}
      imgAlt="reptile image"
      title="We Scale like a Reptile"
    />
  );
}
