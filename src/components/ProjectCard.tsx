import ImageSlider from './ImageSlider';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  projectUrl: string;
  category: string;
  features?: string[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
  images,
  projectUrl,
  category,
  features
}: ProjectCardProps) {
  // URL-friendly slug oluştur
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  return (
    <div className="glass-card gradient-border rounded-xl overflow-hidden group hover-glow">
      <div className="h-44 relative overflow-hidden">
        <ImageSlider images={images} title={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
          <p className="text-white text-sm line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {description}
          </p>
        </div>
        <span className="absolute top-3 right-3 px-2.5 py-1 bg-blue-600/20 backdrop-blur-sm text-blue-300 rounded-lg text-xs font-medium">
          {category}
        </span>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300 line-clamp-1">
            {title}
          </h3>
        </div>
        
        {features && features.length > 0 && (
          <div className="mb-3">
            <ul className="space-y-1 text-xs text-gray-300">
              {features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-400/70"></span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
              {features.length > 2 && (
                <li className="text-blue-400/80 text-xs pl-2.5">+ {features.length - 2} daha fazla...</li>
              )}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-3">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-slate-800/50 text-gray-300 rounded-lg text-xs"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-slate-800/50 text-blue-400/80 rounded-lg text-xs">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link 
            href={`/projects/${slug}`}
            className="flex items-center gap-1 text-blue-400/80 text-sm group-hover:text-blue-300 transition-colors duration-300"
          >
            <span>Detaylar</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="group-hover:underline">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
} 