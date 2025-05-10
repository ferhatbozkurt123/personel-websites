import { projects } from '../projects-data';
import ProjectDetailClient from './ProjectDetailClient';
import Link from 'next/link';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // URL'deki slug'a göre projeyi bul
  const project = projects.find(p => {
    const projectSlug = p.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    return projectSlug === params.slug;
  });

  if (!project) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Proje Bulunamadı</h1>
        <Link href="/projects" className="text-blue-600 hover:underline">
          Projelere Dön
        </Link>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
} 