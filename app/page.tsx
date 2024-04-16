import Hero from "@/components/main/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden">
      <div className="relative h-screen flex flex-col items-center justify-center gap-20">
        <Hero />
      </div>
    </main>
  );
}
