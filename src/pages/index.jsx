import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-9xl text-red-500">Hello Pinecone</h1>
    </main>
  );
}
