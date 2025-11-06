import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import NavBar from "@/components/layout/navbar";

export default function ProjectsPage() {
  // you can later replace this with data fetched from an API or a JSON file
  const projects = [
    {
      title: "Finance Tracker",
      description: "A Ruby on Rails app for tracking stock portfolios and user finances.",
      tech: "Ruby on Rails, PostgreSQL, Bootstrap",
      link: "https://github.com/evafrankovic/finance-tracker",
      live: "",
    },
    {
      title: "Portfolio Website",
      description: "A modern developer portfolio built with Next.js and Tailwind CSS.",
      tech: "Next.js, Tailwind, TypeScript",
      link: "https://evafrankovic.dev",
      live: "/",
    },
    {
      title: "Message Me Chat App",
      description: "A live chat app built in Rails 5 using Action Cable.",
      tech: "Ruby on Rails, Rails",
      link: "https://github.com/evafrankovic/message-me",
      live: "/",
    },
    {
      title: "AlphaBlog",
      description: "A live chat app built in Rails 5 using Action Cable.",
      tech: "Ruby on Rails, Rails, Bootstrap",
      link: "https://github.com/evafrank7/alphaBlog",
      live: "/",
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
                <CardDescription>{project.tech}</CardDescription>
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