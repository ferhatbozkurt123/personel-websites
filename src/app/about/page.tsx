'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <main className="min-h-screen p-2 md:p-4">
      <div className="max-w-[1920px] mx-auto">
        {/* Header Section */}
        <div className="glass-card gradient-border rounded-2xl p-6 md:p-8 mb-4 md:mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mb-4">
            Hakkımda
          </h1>
          <p className="text-gray-300 text-lg">
            Yazılım geliştirici ve bilgisayar mühendisliği öğrencisi
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Bio Section */}
          <div className="glass-card gradient-border rounded-2xl p-4 md:p-8">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-400">Kişisel Bilgiler</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Merhaba! Ben Ferhat Bozkurt, Gazi Üniversitesi Bilgisayar Mühendisliği bölümü öğrencisiyim. 
                2020 yılında başladığım bu yolculukta, yazılım dünyasının dinamik ve sürekli gelişen yapısı 
                beni her zaman heyecanlandırdı. Modern web teknolojileri, yapay zeka ve mobil uygulama 
                geliştirme alanlarında kendimi sürekli geliştirmeye odaklanıyorum.
              </p>
              <p>
                Üniversite eğitimim boyunca teorik bilgilerimi pratiğe dökmek için çeşitli projelerde 
                yer aldım. Full-stack web geliştirme alanında React, Next.js ve .NET Core teknolojilerini 
                kullanarak kurumsal projeler geliştirdim. Mobil uygulama geliştirme sürecinde React Native 
                ile çalışarak cross-platform çözümler ürettim. Backend tarafında mikroservis mimarisi ve 
                modern veritabanı yönetim sistemleri konularında deneyim kazandım.
              </p>
              <p>
                Yapay zeka ve makine öğrenmesi alanlarına olan ilgim, beni TensorFlow ve derin öğrenme 
                teknolojilerini kullanarak çeşitli projeler geliştirmeye yönlendirdi. Özellikle enerji 
                yönetimi alanında geliştirdiğim reinforcement learning projesi, bu alandaki tutkumu 
                daha da artırdı.
              </p>
              <p>
                Freelance yazılım geliştirici olarak çalışırken, farklı sektörlerden müşterilerle 
                iletişim kurma ve proje yönetimi konularında değerli deneyimler edindim. Aynı zamanda 
                açık kaynak projelere katkıda bulunarak global yazılım topluluğunun bir parçası olmaya 
                çalışıyorum. Yeni teknolojileri öğrenme ve bunları gerçek dünya problemlerini çözmek 
                için kullanma konusunda her zaman istekliyim.
              </p>
            </div>
          </div>

          {/* Interests & Goals Section */}
          <div className="glass-card gradient-border rounded-2xl p-4 md:p-8">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-400">İlgi Alanları & Hedefler</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">İlgi Alanları</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Web Teknolojileri ve Modern Frontend Frameworkleri</li>
                  <li>Yapay Zeka ve Makine Öğrenmesi Uygulamaları</li>
                  <li>Mobil Uygulama Geliştirme</li>
                  <li>Mikroservis Mimarileri</li>
                  <li>DevOps ve Cloud Computing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Hedefler</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Yapay zeka alanında uzmanlaşmak</li>
                  <li>Açık kaynak projelere daha fazla katkı sağlamak</li>
                  <li>Teknoloji topluluklarında aktif rol almak</li>
                  
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="glass-card gradient-border rounded-2xl p-4 md:p-8 lg:col-span-2">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-green-400">İletişim</h2>
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
                <span>E-posta</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 