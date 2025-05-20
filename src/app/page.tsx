'use client';

import { FaGithub, FaLinkedin, FaCode, FaBrain, FaServer } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { projects } from './projects/projects-data';
import { slugify } from '../utils/slugify';
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'tr' | 'en';
  // Öne çıkan projeler (örnek: ilk 3 proje)
  const featuredProjects = projects.slice(0, 3);
  const [cvMenuOpen, setCvMenuOpen] = useState(false);
  const cvButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Menü dışında tıklanınca kapansın
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          cvButtonRef.current && !cvButtonRef.current.contains(event.target as Node)) {
        setCvMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCvClick = (e: React.MouseEvent, lang: 'tr' | 'en') => {
    e.preventDefault();
    e.stopPropagation();
    const url = lang === 'tr' ? '/cv-tr.pdf' : '/cv-en.pdf';
    window.open(url, '_blank');
    setCvMenuOpen(false);
  };

  return (
    <main className="min-h-screen p-2 md:p-4 relative">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-gray-900/50 to-gray-950 z-[-2]"></div>
      <div className="absolute inset-0 bg-[url('/bg-grid.svg')] bg-repeat opacity-20 z-[-1]"></div>
      
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-8 relative">
        {/* Profile Card - Left Side */}
        <div className="lg:w-1/4 xl:w-1/5">
          <div className="glass-card gradient-border rounded-2xl p-4 sticky top-0">
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto mb-4 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 animate-pulse group-hover:animate-none transition-all duration-300"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                <Image
                  src="/profile.jpg"
                  alt="Ferhat Bozkurt"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 160px, (max-width: 1200px) 160px, 160px"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Ferhat Bozkurt</h1>
              <h2 className="text-2xl font-semibold mb-4">Full Stack Developer</h2>
              <p className="text-lg mb-6">
                {t('home.intro')}
              </p>
              <div className="flex flex-col gap-2 mb-6">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t('home.contactCta')}
                </Link>
                <div className="relative" ref={menuRef}>
                  <button
                    ref={cvButtonRef}
                    type="button"
                    className="bg-transparent text-blue-400 px-6 py-3 rounded-full hover:bg-blue-600/10 transition-all duration-300 border border-blue-400 hover:border-blue-600 w-full"
                    onClick={() => setCvMenuOpen(!cvMenuOpen)}
                  >
                    {t('home.downloadCV')}
                  </button>
                  {cvMenuOpen && (
                    <div className="absolute w-full mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-blue-200 dark:border-slate-700 z-50">
                      <button
                        onClick={(e) => handleCvClick(e, 'tr')}
                        className="w-full px-4 py-3 text-left text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-slate-700 border-b border-blue-200 dark:border-slate-700"
                      >
                        Türkçe CV
                      </button>
                      <button
                        onClick={(e) => handleCvClick(e, 'en')}
                        className="w-full px-4 py-3 text-left text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-slate-700"
                      >
                        English CV
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex flex-col gap-4">
                  <a 
                    href="mailto:ferhatbozkurt.bm@gmail.com"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 justify-center group"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      ferhatbozkurt.bm@gmail.com
                    </span>
                  </a>
                  <a 
                    href="https://github.com/ferhatbozkurt123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 justify-center group"
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      GitHub
                    </span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ferhat-bozkurt1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 justify-center group"
                  >
                    <FaLinkedin className="w-5 h-5 mr-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Right Side - ENHANCED */}
        <div className="lg:w-3/4 xl:w-4/5 space-y-8">
          {/* Skills Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/skills" className="block">
              <div className="glass-card gradient-border rounded-2xl p-4 transform hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/20 flex items-center justify-center">
                    <FaCode className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-400">{t('home.frontendTitle')}</h3>
                </div>
                <p className="text-gray-300">
                  {t('home.frontendDesc')}
                </p>
              </div>
            </Link>

            <Link href="/skills" className="block">
              <div className="glass-card gradient-border rounded-2xl p-4 transform hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-green-600/20 flex items-center justify-center">
                    <FaServer className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-400">{t('home.backendTitle')}</h3>
                </div>
                <p className="text-gray-300">
                  {t('home.backendDesc')}
                </p>
              </div>
            </Link>

            <Link href="/skills" className="block">
              <div className="glass-card gradient-border rounded-2xl p-4 transform hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-600/20 flex items-center justify-center">
                    <FaBrain className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400">{t('home.aiTitle')}</h3>
                </div>
                <p className="text-gray-300">
                  {t('home.aiDesc')}
                </p>
              </div>
            </Link>
          </div>

          {/* Featured Projects */}
          <div className="glass-card gradient-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-400">{t('home.featuredProjects')}</h3>
              <Link 
                href="/projects" 
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                {t('home.seeAll')}
                <span className="text-xl">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProjects.map((project, idx) => (
                <Link href={`/projects/${slugify(project.title.tr)}`} className="block" key={idx}>
                  <div className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <h4 className="text-xl font-semibold text-gray-200 mb-3">{project.title[lang]}</h4>
                    <p className="text-gray-400 mb-4">
                      {project.description[lang]}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-sm bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="glass-card gradient-border rounded-2xl p-5 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500 pointer-events-none"></div>
            <h3 className="text-xl font-bold text-gray-200 mb-3 relative">{t('home.contactCta')}</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto relative">
              {t('home.contactDesc')}
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              {t('home.contactCta')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
