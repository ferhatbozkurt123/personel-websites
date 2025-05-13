'use client';

import { useState, useMemo } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Category, projects } from './projects-data';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<Category>('Hepsi');
  const [selectedTech, setSelectedTech] = useState<string>('');

  const categories: Category[] = ['Hepsi', 'Web', 'Mobil', 'AI', 'Network Programming', 'Oyun'];

  // Tüm teknolojileri topla
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Projeleri filtrele
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'Hepsi' || project.category === selectedCategory;
      const matchesTech = !selectedTech || project.technologies.includes(selectedTech);
      return matchesCategory && matchesTech;
    });
  }, [selectedCategory, selectedTech]);

  // Filtreleri sıfırla
  const resetFilters = () => {
    setSelectedCategory('Hepsi');
    setSelectedTech('');
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="glass-card gradient-border rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              {t('projects.title')}
            </h1>
            {(selectedCategory !== 'Hepsi' || selectedTech) && (
              <button
                onClick={resetFilters}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t('projects.clearFilters')}
              </button>
            )}
          </div>
          
          {/* Filtreler */}
          <div className="space-y-5">
            {/* Kategori Filtreleri */}
            <div>
              <h2 className="text-base font-medium text-blue-400 mb-3">{t('projects.categories')}</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-800/50 text-gray-300 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Teknoloji Filtreleri */}
            <div>
              <h2 className="text-base font-medium text-blue-400 mb-3">{t('projects.technologies')}</h2>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech === selectedTech ? '' : tech)}
                    className={`px-2.5 py-1 rounded-lg text-xs transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ${
                      tech === selectedTech
                        ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-800/50 text-gray-300 hover:text-white'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Aktif Filtreler */}
            {(selectedCategory !== 'Hepsi' || selectedTech) && (
              <div className="flex items-center gap-2 text-xs text-gray-300 pt-2">
                <span>{t('projects.activeFilters')}:</span>
                {selectedCategory !== 'Hepsi' && (
                  <span className="bg-blue-600/20 text-blue-400 px-2.5 py-1 rounded-lg">
                    {selectedCategory}
                  </span>
                )}
                {selectedTech && (
                  <span className="bg-blue-600/20 text-blue-400 px-2.5 py-1 rounded-lg">
                    {selectedTech}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Projeler Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Sonuç Bulunamadı Mesajı */}
        {filteredProjects.length === 0 && (
          <div className="glass-card gradient-border rounded-2xl p-6 text-center">
            <p className="text-gray-300 text-base mb-3">
              {t('projects.noResults')}
            </p>
            <button
              onClick={resetFilters}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-sm"
            >
              {t('projects.clearFilters')}
            </button>
          </div>
        )}
      </div>
    </main>
  );
} 