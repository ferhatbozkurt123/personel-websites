'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // EmailJS ile mail gönderimi
      const serviceID = 'service_epkkto5';
      const templateID = 'template_7dzwjmz';
      const userID = 'MbpiaCyt1SvG6N6U_';
      
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        userID
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card gradient-border rounded-2xl p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-gray-300 text-lg">
            {t('contact.info')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* İletişim Bilgileri */}
          <div className="glass-card gradient-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">{t('navbar.contact')} Bilgileri</h2>
            <div className="space-y-6">
              <a 
                href="mailto:ferhatbozkurt.bm@gmail.com" 
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <span>ferhatbozkurt.bm@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ferhat-bozkurt" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/ferhatbozkurt123" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
                  <FaGithub className="w-5 h-5" />
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="glass-card gradient-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">{t('contact.sendMessage')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={t('contact.name')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={t('contact.email')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={t('contact.message')}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 
                  ${isSubmitting 
                    ? 'bg-blue-600/50 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20'
                  }
                `}
              >
                {isSubmitting ? t('contact.send') + '...' : t('contact.send')}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 rounded-lg bg-green-600/20 text-green-400">
                  {t('contact.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 rounded-lg bg-red-600/20 text-red-400">
                  {t('contact.error')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 