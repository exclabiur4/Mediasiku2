import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  currentLanguage: Language;
  switchLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

const translations = {
  id: {
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.services': 'Layanan',
    'nav.register': 'Daftar',
    'nav.login': 'Masuk',
    'nav.logout': 'Keluar',
    'nav.dashboard': 'Dashboard',
    'hero.title': 'Sistem Mediasi Online Terpercaya',
    'hero.subtitle': 'Solusi mediasi hukum yang cepat, aman, dan profesional dengan bantuan teknologi AI',
    'hero.cta': 'Mulai Mediasi Sekarang',
    'login.title': 'Masuk ke Akun Anda',
    'login.email': 'Email',
    'login.password': 'Kata Sandi',
    'login.role': 'Peran',
    'login.submit': 'Masuk',
    'login.register': 'Belum punya akun? Daftar di sini',
    'register.title': 'Buat Akun Baru',
    'register.name': 'Nama Lengkap',
    'register.submit': 'Daftar',
    'register.login': 'Sudah punya akun? Masuk di sini',
    'role.applicant': 'Pengaju Mediasi',
    'role.mediator': 'Mediator',
    'role.admin': 'Administrator',
    'dashboard.welcome': 'Selamat Datang',
    'dashboard.cases': 'Kasus',
    'dashboard.new_case': 'Kasus Baru',
    'dashboard.pending': 'Menunggu',
    'dashboard.completed': 'Selesai',
    'case.submit': 'Ajukan Kasus Baru',
    'case.title': 'Judul Kasus',
    'case.description': 'Deskripsi Kasus',
    'case.category': 'Kategori',
    'case.documents': 'Dokumen Pendukung',
    'case.submit_btn': 'Ajukan Kasus',
    'ai.consultation': 'Konsultasi AI',
    'ai.question': 'Pertanyaan Hukum',
    'ai.ask': 'Tanya AI',
    'payment.title': 'Pembayaran',
    'payment.amount': 'Jumlah',
    'payment.pay': 'Bayar Sekarang',
    'admin.users': 'Pengguna',
    'admin.cases': 'Kasus',
    'admin.analytics': 'Analitik',
    'chatbot.title': 'Bantuan Hukum AI',
    'chatbot.placeholder': 'Ketik pertanyaan hukum Anda...',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.register': 'Register',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    'nav.dashboard': 'Dashboard',
    'hero.title': 'Trusted Online Mediation System',
    'hero.subtitle': 'Fast, secure, and professional legal mediation solutions powered by AI technology',
    'hero.cta': 'Start Mediation Now',
    'login.title': 'Login to Your Account',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.role': 'Role',
    'login.submit': 'Login',
    'login.register': "Don't have an account? Register here",
    'register.title': 'Create New Account',
    'register.name': 'Full Name',
    'register.submit': 'Register',
    'register.login': 'Already have an account? Login here',
    'role.applicant': 'Mediation Applicant',
    'role.mediator': 'Mediator',
    'role.admin': 'Administrator',
    'dashboard.welcome': 'Welcome',
    'dashboard.cases': 'Cases',
    'dashboard.new_case': 'New Cases',
    'dashboard.pending': 'Pending',
    'dashboard.completed': 'Completed',
    'case.submit': 'Submit New Case',
    'case.title': 'Case Title',
    'case.description': 'Case Description',
    'case.category': 'Category',
    'case.documents': 'Supporting Documents',
    'case.submit_btn': 'Submit Case',
    'ai.consultation': 'AI Consultation',
    'ai.question': 'Legal Question',
    'ai.ask': 'Ask AI',
    'payment.title': 'Payment',
    'payment.amount': 'Amount',
    'payment.pay': 'Pay Now',
    'admin.users': 'Users',
    'admin.cases': 'Cases',
    'admin.analytics': 'Analytics',
    'chatbot.title': 'AI Legal Assistant',
    'chatbot.placeholder': 'Type your legal question...',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const switchLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language.code);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code][key] || key;
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      if (lang) setCurrentLanguage(lang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languages };