import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavBar } from "@/components/layout/navbar"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

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
            sizes="256px"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">Eva Frankovic</h1>
        <p className="text-center mb-6 mt-2 ml-10 mr-10"> I am currently a User Engagement Specialist at the Pittsburgh Supercomputing Center, part of Carnegie Mellon University. Where alongside of adminsitrative woek, I assist in. the development 
          of there internal web application using Ruby and Ruby on Rails. Recently, we have began tranisitioning the application to using React and Tailwind.css. I graduated from Bucknell University in May 2024 with a Bachelor’s degree in Computer Science.
          While at Bucknell, I competed on the university’s varsity soccer team, where we won two Patriot League Championships. Now, as a recent graduate, I’m continuing to grow my technical toolkit by exploring frameworks such
          as Bootstrap and React while strengthening my skills in HTML, CSS, and JavaScript. </p>
        <div className="flex gap-6 justify-center mt-2">
          <FontAwesomeIcon icon={faLinkedin} className="w-13 h-13 text-gray-700 hover:text-blue-800 transition" />
          <FontAwesomeIcon icon={faGithub} className="w-13 h-13 text-gray-700 hover:text-blue-800 transition" />
        </div>

        <Button className="m-8" asChild>
          <a href="/contact"> Contact </a>
        </Button>
      </section>
    </>
  );
}