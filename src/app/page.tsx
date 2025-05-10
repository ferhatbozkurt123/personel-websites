'use client';

import { FaGithub, FaLinkedin, FaCode, FaBrain, FaServer, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-2 md:p-4">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-8 relative">
        {/* Profile Card - Left Side */}
        <div className="lg:w-1/4 xl:w-1/5">
          <div className="glass-card gradient-border rounded-2xl p-6 sticky top-24">
            {/* Profile Image */}
            <div className="relative w-40 h-40 mx-auto mb-6 group">
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
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Ferhat Bozkurt
              </h1>
              <h2 className="text-xl text-blue-400 mb-4">
                Full Stack Developer
              </h2>
              <p className="text-gray-300 mb-6">
                Modern web teknolojileri ile kullanıcı dostu ve yenilikçi çözümler geliştiriyorum.
                React, Next.js ve Node.js ekosisteminde uzmanlaşmış bir yazılım geliştiriciyim.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  İletişime Geç
                </Link>
                <a 
                  href="/cv.pdf"
                  className="bg-transparent text-blue-400 px-6 py-3 rounded-full hover:bg-blue-600/10 transition-all duration-300 border border-blue-400 hover:border-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV İndir
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-700">
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
                    href="https://github.com/ferhatbozkurt"
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
                    href="https://linkedin.com/in/ferhatbozkurt"
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
          {/* Welcome Banner */}
          <div className="glass-card gradient-border rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Merhaba, Ben Ferhat
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl relative">
              Full-stack web geliştirme, yapay zeka ve mobil uygulama alanlarında çözümler üretiyorum.
              Modern teknolojiler kullanarak yenilikçi projeler geliştirmeye odaklanıyorum.
            </p>
          </div>

          {/* Skills Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/skills" className="block">
              <div className="glass-card gradient-border rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center">
                    <FaCode className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">Frontend</h3>
                </div>
                <p className="text-gray-300">
                  React, Next.js, Angular ile modern ve responsive web uygulamaları geliştiriyorum.
                </p>
              </div>
            </Link>

            <Link href="/skills" className="block">
              <div className="glass-card gradient-border rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center">
                    <FaServer className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-400">Backend</h3>
                </div>
                <p className="text-gray-300">
                  .NET Core ve Node.js ile güvenli ve ölçeklenebilir API'lar tasarlıyorum.
                </p>
              </div>
            </Link>

            <Link href="/skills" className="block">
              <div className="glass-card gradient-border rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                    <FaBrain className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400">AI & ML</h3>
                </div>
                <p className="text-gray-300">
                  TensorFlow ile yapay zeka modelleri geliştirip, pratik çözümler üretiyorum.
                </p>
              </div>
            </Link>
          </div>

          {/* Featured Projects */}
          <div className="glass-card gradient-border rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-blue-400">Öne Çıkan Projeler</h3>
              <Link 
                href="/projects" 
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                Tümünü Gör
                <span className="text-xl">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/projects" className="block">
                <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <h4 className="text-xl font-semibold text-gray-200 mb-3">Stok ve Satış Yönetimi</h4>
                  <p className="text-gray-400 mb-4">
                    Kapsamlı işletme yönetim sistemi. Stok takibi, satış yönetimi ve raporlama özellikleri.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-sm bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">Angular</span>
                    <span className="text-sm bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full">.NET Core</span>
                  </div>
                </div>
              </Link>

              <Link href="/projects" className="block">
                <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <h4 className="text-xl font-semibold text-gray-200 mb-3">Enerji Yönetimi AI</h4>
                  <p className="text-gray-400 mb-4">
                    Yapay zeka ile enerji tüketimini optimize eden akıllı sistem. Gerçek zamanlı analiz ve tahminleme.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-sm bg-yellow-900/30 text-yellow-400 px-3 py-1 rounded-full">Python</span>
                    <span className="text-sm bg-orange-900/30 text-orange-400 px-3 py-1 rounded-full">TensorFlow</span>
                  </div>
                </div>
              </Link>

              <Link href="/projects" className="block">
                <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <h4 className="text-xl font-semibold text-gray-200 mb-3">B2B Platform</h4>
                  <p className="text-gray-400 mb-4">
                    İşletmeler arası ticaret platformu. Eşleştirme algoritmaları ve akıllı öneri sistemi.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-sm bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">React Native</span>
                    <span className="text-sm bg-green-900/30 text-green-400 px-3 py-1 rounded-full">Node.js</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="glass-card gradient-border rounded-2xl p-8 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500"></div>
            <h3 className="text-2xl font-bold text-gray-200 mb-4 relative">Birlikte Çalışalım</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto relative">
              Projeniz için modern ve etkili çözümler üretmek isterseniz, hemen iletişime geçin.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
