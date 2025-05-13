'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../projects-data';
import { useTranslation } from 'react-i18next';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'tr' | 'en';

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Üst Navigasyon */}
        <div className="mb-8">
          <Link 
            href="/projects"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('projectDetail.backToProjects')}
          </Link>
        </div>

        {/* Proje Başlığı ve Kategori */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title[lang]}</h1>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            {project.category[lang]}
          </span>
        </div>

        {/* Ana İçerik Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Kolon - Görsel Galerisi */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ana Görsel */}
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
                 onClick={() => setIsFullscreen(true)}>
              <Image
                src={project.images[selectedImage]}
                alt={`${project.title} - Görsel ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            {/* Küçük Görseller */}
            {project.images.length > 1 && (
              <div className="grid grid-cols-5 gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-blue-600' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Küçük Görsel ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 20vw, 10vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sağ Kolon - Proje Detayları */}
          <div className="space-y-8">
            {/* Açıklama */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('projectDetail.about')}</h2>
              <p className="text-gray-600">{project.description[lang]}</p>
            </div>

            {/* Teknolojiler */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('projectDetail.technologies')}</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Özellikler */}
            {project.features && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('projectDetail.features')}</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{feature[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* GitHub Linki */}
            <div>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                </svg>
                {t('projectDetail.github')}
              </a>
            </div>
          </div>
        </div>

        {/* Tam Ekran Görüntüleyici */}
        {isFullscreen && (
          <div 
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            <div className="relative w-full h-full">
              <Image
                src={project.images[selectedImage]}
                alt={`${project.title} - Görsel ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                quality={100}
              />

              {/* Navigasyon Butonları */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(prev => 
                        prev === 0 ? project.images.length - 1 : prev - 1
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(prev => 
                        prev === project.images.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Kapatma Butonu */}
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Görsel Sayacı */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {selectedImage + 1} / {project.images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 