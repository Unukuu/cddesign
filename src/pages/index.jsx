import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";

import Aboutme from "@/components/aboutmef.jsx/aboutme";
import Herosection from "@/components/herosectionf/herosection";
import Skills from "@/components/skills/skill";
import Experience from "@/components/experience/experience";
import Work from "@/components/work/work";
import Contactme from "@/components/contactme/contactme";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="dark:bg-[#030712] relative">
      <Header />
      <Herosection />
      <Aboutme />
      <Skills />
      <Experience />
      <Work />
      <Contactme />
      <Footer />
    </main>
  );
}
