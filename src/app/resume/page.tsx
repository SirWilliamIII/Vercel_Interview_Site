import Image from "next/image";
import resumeImg from "public/resume.png";

export default function ResumePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        height: "90vh",
      }}
    >
      <Image
        src={resumeImg}
        alt="resume image"
        title="Resume"
        layout="fill"
        objectFit="scale-down"
      />
    </div>
  );
}
