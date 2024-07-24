import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";

import Aboutme from "@/components/aboutmef.jsx/aboutme";
import Herosection from "@/components/herosectionf/herosection";
import Skills from "@/components/skills/skill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Herosection />
      <Aboutme />
      <Skills />
    </main>
  );
}
