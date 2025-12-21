import { Button } from "@/components/ui/button";
import NavBar from "@/components/layout/navbar"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// This is the homepage of my document 

export default function HomePage() {
  return (
    <>
      <NavBar />
      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 pb-25">
        <div className="relative w-75 h-75 rounded-full overflow-hidden border-4">
          <Image
            src="/eva.jpg"
            alt="Portrait of Eva Frankovic"
            sizes="256px"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="font-italiana text-6xl tracking-wide uppercase mb-2">
          Eva Frankovic
        </h1>
        <h2 className="font-italiana text-xl tracking-[0.2em] uppercase mb-4">
          Software & Creative Developer
        </h2>
        <p className="font-normal text-base text-center mb-6 mt-2 ml-10 mr-10"> I am currently a User Support Developer at the Pittsburgh Supercomputing Center, part of Carnegie Mellon University. Alongside administrative responsibilities, I contribute to both the front-end and back-end of our internal web application. I support the transition to React and Tailwind CSS, maintain and extend features in the existing Ruby on Rails infrastructure, and assist with backend development by building and refining API routes using Python. I graduated from Bucknell University in May 2024 with a Bachelor’s degree in Computer Science and competed on the varsity women’s soccer team, where we won two Patriot League Championships. I continue to expand my full‑stack toolkit and develop clean, modern web experiences.</p>
        <div className="flex gap-6 justify-center mt-2">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </div>

        <Button className="m-8" asChild>
          <a className="font-italiana uppercase button" href="/contact"> Contact </a>
        </Button>
      </section>
    </>
  );
}