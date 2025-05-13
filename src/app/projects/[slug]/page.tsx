export const dynamicParams = true;

import { projects } from '../projects-data';
import ProjectDetailClient from './ProjectDetailClient';
import Link from 'next/link';
import { slugify } from '../../../utils/slugify';

export default async function ProjectDetail(props: { params: { slug: string } }) {
  const { params } = await props;
  const project = projects.find(p => {
    const projectSlug = slugify(p.title.tr);
    return projectSlug === params.slug;
  });

  if (!project) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-blue-600 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: slugify(p.title.tr),
  }));
} 