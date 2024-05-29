import reliabilityImg from "public/family.png";
import Hero from "@/components/hero";

export default function FamilyPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="reliability image"
      title="This is not my family."
    />
  );
}
