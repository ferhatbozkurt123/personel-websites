'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen p-2 md:p-4">
      <div className="max-w-[1920px] mx-auto">
        {/* Header Section */}
        <div className="glass-card gradient-border rounded-2xl p-6 md:p-8 mb-4 md:mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mb-4">
            {t('about.title')}
          </h1>
          <p className="text-gray-300 text-lg">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Bio Section */}
          <div className="glass-card gradient-border rounded-2xl p-4 md:p-8">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-400">{t('about.personalInfo')}</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>{t('about.bio1')}</p>
              <p>{t('about.bio2')}</p>
              <p>{t('about.bio3')}</p>
              <p>{t('about.bio4')}</p>
            </div>
          </div>

          {/* Interests & Goals Section */}
          <div className="glass-card gradient-border rounded-2xl p-4 md:p-8">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-400">{t('about.interestsGoals')}</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">{t('about.interests')}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('about.interest1')}</li>
                  <li>{t('about.interest2')}</li>
                  <li>{t('about.interest3')}</li>
                  <li>{t('about.interest4')}</li>
                  <li>{t('about.interest5')}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">{t('about.goals')}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('about.goal1')}</li>
                  <li>{t('about.goal2')}</li>
                  <li>{t('about.goal3')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="glass-card gradient-border rounded-2xl p-4 md:p-8 lg:col-span-2">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-green-400">{t('about.contact')}</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ferhatbozkurt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="text-2xl" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ferhatbozkurt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FaLinkedin className="text-2xl text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:contact@ferhatbozkurt.dev"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FaEnvelope className="text-2xl text-red-400" />
                <span>{t('about.email')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 