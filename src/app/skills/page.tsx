'use client';

import { FaCode, FaServer, FaDatabase, FaBrain, FaBriefcase, FaReact, FaNodeJs, FaPython, FaAngular } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiTensorflow, SiUnity, SiDotnet, SiSharp, SiMysql, SiFirebase } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen p-2 md:p-4">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
       

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Experience Timeline */}
          <div className="glass-card gradient-border rounded-2xl p-4 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-indigo-600/20 flex items-center justify-center mr-4">
                <FaBriefcase className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-indigo-400">{t('skills.experiences')}</h2>
            </div>

            <div className="space-y-8">
              {/* İŞKUR */}
              <div className="relative pl-8 border-l-2 border-indigo-500/30">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-semibold text-gray-200">{t('skills.iskurTitle')}</h3>
                <p className="text-indigo-400 mb-2">2025 (20 {t('skills.workday')})</p>
                <p className="text-gray-400">{t('skills.iskurDesc')}</p>
              </div>

              {/* Application Developer */}
              <div className="relative pl-8 border-l-2 border-indigo-500/30">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-semibold text-gray-200">{t('skills.appDevTitle')}</h3>
                <p className="text-indigo-400 mb-2">2024 (6 {t('skills.month')})</p>
                <p className="text-gray-400">{t('skills.appDevDesc')}</p>
              </div>

              {/* B2B Project */}
              <div className="relative pl-8 border-l-2 border-indigo-500/30">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-semibold text-gray-200">{t('skills.b2bTitle')}</h3>
                <p className="text-indigo-400 mb-2">2024 - {t('skills.ongoing')}</p>
                <p className="text-gray-400">{t('skills.b2bDesc')}</p>
              </div>

              {/* Graduate Network Platform */}
              <div className="relative pl-8 border-l-2 border-indigo-500/30">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-semibold text-gray-200">{t('skills.graduateTitle')}</h3>
                <p className="text-indigo-400 mb-2">2024 - {t('skills.ongoing')}</p>
                <p className="text-gray-400">{t('skills.graduateDesc')}</p>
              </div>

              {/* Graduation Project */}
              <div className="relative pl-8 border-l-2 border-indigo-500/30">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-semibold text-gray-200">{t('skills.graduationTitle')}</h3>
                <p className="text-indigo-400 mb-2">2024 - 2025</p>
                <p className="text-gray-400">{t('skills.graduationDesc')}</p>
              </div>

              {/* Freelance */}
              <div className="relative pl-8 border-l-2 border-indigo-500/30">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-semibold text-gray-200">{t('skills.freelanceTitle')}</h3>
                <p className="text-indigo-400 mb-2">2023 - {t('skills.ongoing')}</p>
                <p className="text-gray-400">{t('skills.freelanceDesc')}</p>
                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                  <li>{t('skills.freelanceProject1')}</li>
                  <li>{t('skills.freelanceProject2')}</li>
                  <li>{t('skills.freelanceProject3')}</li>
                </ul>
              </div>

              {/* Education */}
              <div className="relative pl-8 border-l-2 border-indigo-500/30">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-semibold text-gray-200">{t('skills.educationTitle')}</h3>
                <p className="text-indigo-400 mb-2">2020 - {t('skills.ongoing')}</p>
                <p className="text-gray-400">{t('skills.educationDesc')}</p>
                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                  <li>{t('skills.educationFocus1')}</li>
                  <li>{t('skills.educationFocus2')}</li>
                  <li>{t('skills.educationFocus3')}</li>
                </ul>
              </div>
            </div>
        </div>

          {/* Skills Grid Container */}
          <div className="space-y-6">
            {/* Frontend Development */}
            <div className="glass-card gradient-border rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mr-4">
                  <FaCode className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-blue-400">{t('skills.frontend')}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard icon={<FaReact className="w-8 h-8" />} name="React" color="text-blue-400" />
                <SkillCard icon={<SiNextdotjs className="w-8 h-8" />} name="Next.js" color="text-white" />
                <SkillCard icon={<FaAngular className="w-8 h-8" />} name="Angular" color="text-red-500" />
                <SkillCard icon={<SiTailwindcss className="w-8 h-8" />} name="TailwindCSS" color="text-cyan-400" />
                <SkillCard icon={<SiTypescript className="w-8 h-8" />} name="TypeScript" color="text-blue-500" />
                <SkillCard icon={<SiUnity className="w-8 h-8" />} name="Unity" color="text-gray-200" />
              </div>
            </div>

            {/* Backend Development */}
            <div className="glass-card gradient-border rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center mr-4">
                  <FaServer className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-green-400">{t('skills.backend')}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard icon={<SiDotnet className="w-8 h-8" />} name=".NET Core" color="text-purple-500" />
                <SkillCard icon={<SiSharp className="w-8 h-8" />} name="C#" color="text-purple-400" />
                <SkillCard icon={<FaNodeJs className="w-8 h-8" />} name="Node.js" color="text-green-500" />
                <SkillCard icon={<FaPython className="w-8 h-8" />} name="Python" color="text-yellow-400" />
              </div>
          </div>

            {/* AI & Machine Learning */}
            <div className="glass-card gradient-border rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                  <FaBrain className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-purple-400">{t('skills.ai')}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard icon={<FaPython className="w-8 h-8" />} name="Python" color="text-yellow-300" />
                <SkillCard icon={<SiTensorflow className="w-8 h-8" />} name="TensorFlow" color="text-orange-500" />
                <SkillCard icon={<FaBrain className="w-8 h-8" />} name="Deep Learning" color="text-purple-400" />
              </div>
            </div>

            {/* Database Management */}
            <div className="glass-card gradient-border rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-yellow-600/20 flex items-center justify-center mr-4">
                  <FaDatabase className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold text-yellow-400">{t('skills.database')}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard icon={<SiPostgresql className="w-8 h-8" />} name="PostgreSQL" color="text-blue-400" />
                <SkillCard icon={<SiMysql className="w-8 h-8" />} name="MySQL" color="text-blue-600" />
                <SkillCard icon={<FaDatabase className="w-8 h-8" />} name="Azure SQL" color="text-blue-500" />
                <SkillCard icon={<SiFirebase className="w-8 h-8" />} name="Firebase" color="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SkillCard({ icon, name, color }: { icon: React.ReactNode; name: string; color: string }) {
  return (
    <div className="group relative bg-gray-800/50 rounded-xl p-4 transition-all duration-300 hover:bg-gray-700/50 hover:-translate-y-1">
      <div className="flex flex-col items-center space-y-2">
        <div className={`${color} transition-all duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <span className="text-gray-300 text-sm font-medium text-center">{name}</span>
      </div>
    </div>
  );
} 