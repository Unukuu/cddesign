import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Herosection from "@/components/herosection";
import Aboutme from "@/components/aboutme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Herosection />
      <Aboutme />
    </main>
  );
}
