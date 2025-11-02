import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavBar } from "@/components/layout/navbar"
import Image from "next/image";
// This is the homepage of my document 

export default function HomePage() {
  return (
    <>
      <NavBar />
      <section className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="relative w-75 h-75 rounded-full overflow-hidden border-4">
          <Image
            src="/eva.jpg"
            alt="Portrait of Eva Frankovic"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">Eva Frankovic</h1>
        <p className="text-lg">Welcome to my portfolio</p>
        <Button className="m-8" asChild>
          <a href="/contact"> Contact </a>
        </Button>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-8"> Projects</h2>
      </section>
    </>
  );
}