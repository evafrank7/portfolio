import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import NavBar from "@/components/layout/navbar";

export default function ProjectsPage() {
  // maybe create a json file to fetch? Implement a filtering feature???
  const projects = [
    {
      title: "La Prima",
      heading: "Work in Progress",
      image: "/project-images/coffee.png",
      description: "A React replica of a coffee shop website, only landing page for now.",
      tech: "React, Vite, JavaScript",
      link: "https://github.com/evafrank7/laprima",
      live: "/",
    },
    {
      title: "Finance Tracker",
      image: "/project-images/finance.png",
      description: "A Ruby on Rails app for tracking stock portfolios and user finances.",
      tech: "Ruby on Rails, PostgreSQL, Bootstrap",
      link: "https://github.com/evafrank7/finance-tracker",
      live: "https://evafrank7.github.io/finance-tracker/",
    },
    {
      title: "Portfolio Website",
      image: "/project-images/portfolio.png",
      description: "A modern developer portfolio built with Next.js and Tailwind CSS.",
      tech: "Next.js, Tailwind, TypeScript",
      link: "https://github.com/evafrank7/portfolio",
      live: "https://evafrank7.github.io/portfolio/",
    },
    {
      title: "Message Me Chat App",
      image: "/project-images/message.png",
      description: "A live chat app built in Rails 5 using Action Cable.",
      tech: "Ruby on Rails, Rails, Bootstrap",
      link: "https://github.com/evafrank7/messageMe",
      live: "https://evafrank7.github.io/messageMe/",
    },
    {
      title: "AlphaBlog",
      image: "/project-images/blog.png",
      description: "A full-stack Ruby on Rails blog app with user authentication, CRUD functionality, and responsive Bootstrap design.",
      tech: "Ruby on Rails, Rails, Bootstrap",
      link: "https://github.com/evafrank7/alphaBlog",
      live: "https://evafrank7.github.io/alphaBlog/",
    },
    {
      title: "Movie API",
      description: "A movie search app built with JavaScript and a public movie API to display film details, ratings, and posters in real time.",
      image: "/project-images/movie.png",
      tech: "React, Vite, JavaScript",
      link: "https://github.com/evafrank7/movie-app",
      live: "https://evafrank7.github.io/movie-app/",
    },
    {
      title: "PSC Impact Stores",
      image: "/project-images/psc.png",
      description: "An interview assignment demostrating use of HTML, CSS, and a simple back-end component.",
      tech: "HTML, CSS, JSON, Bootstrap",
      link: "https://github.com/evafrank7/PSC?tab=readme-ov-file",
      live: "https://psc-kbhx.onrender.com/",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gray-100 py-12 px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardTitle className="text-sm font-normal text-red-500">{project.heading}</CardTitle>
                <CardDescription>{project.tech}</CardDescription>
                <img
                  src={project.image}
                  alt={project.title}
                  className='aspect-video h-50 w-full rounded-xl object-cover'
                />
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className=" flex gap-3 mt-2 justify-left">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    <FontAwesomeIcon className="w-5 h-5 text-gray-700" icon={faCode} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    <FontAwesomeIcon className="w-5 h-5 text-gray-700" icon={faSafari} />
                  </a>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}