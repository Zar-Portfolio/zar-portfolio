import Hero from "@/components/main/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <div className="h-screen flex flex-col items-center justify-center gap-20">
        
        <Hero />
      </div>
    </main>
  );
}
