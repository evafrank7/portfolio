"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import ImageCarousel from "@/components/imageCarousel";

type Project = {
  title: string;
  heading?: string;
  images: string[];
  description?: string;
  subDescription?: string;
  tech?: string;
  link?: string;
  live?: string;
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200"
        >
          ✕
        </button>

        <div className="p-6">
          {/* Content */}
          <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>

            {project.heading && (
              <p className="mt-1 text-sm font-medium text-red-500">
                {project.heading}
              </p>
            )}

            {project.tech && (
              <p className="mt-2 text-sm text-gray-600">{project.tech}</p>
            )}

            {project.description && (
              <p className="mt-4 text-gray-700">{project.description}</p>
            )}

            {project.subDescription && (
              <p className="mt-3 text-sm text-gray-600">
                {project.subDescription}
              </p>
            )}

            {/* Links */}
            <div className="mt-5 flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                >
                  <FontAwesomeIcon className="h-4 w-4" icon={faCode} />
                  Code
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                >
                  <FontAwesomeIcon className="h-4 w-4" icon={faSafari} />
                  Live
                </a>
              )}
            </div>

            {/* Large images */}
            <div className="mt-6">
              <div className="w-full">
                <ImageCarousel images={project.images} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}