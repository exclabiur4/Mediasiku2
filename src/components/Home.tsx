import React from 'react';
import { Shield, Video, FileText, Clock, Star, Users, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const features = [
    { 
      icon: Shield, 
      title: 'Secure & Confidential', 
      description: 'End-to-end encryption ensures your legal matters remain private' 
    },
    { 
      icon: Video, 
      title: 'Video Mediation', 
      description: 'High-quality video conferencing for remote mediation sessions' 
    },
    { 
      icon: FileText, 
      title: 'Document Management', 
      description: 'Secure upload, storage, and digital signature capabilities' 
    },
    { 
      icon: Clock, 
      title: 'Fast Resolution', 
      description: 'Resolve disputes faster than traditional court proceedings' 
    },
    { 
      icon: Star, 
      title: 'Expert Mediators', 
      description: 'Certified and experienced mediators in various legal areas' 
    },
    { 
      icon: Users, 
      title: 'Multi-party Support', 
      description: 'Handle complex cases involving multiple parties efficiently' 
    }
  ];

  const stats = [
    { value: '1000+', label: 'Cases Resolved' },
    { value: '95%', label: 'Success Rate' },
    { value: '24/7', label: 'AI Support' },
    { value: '50+', label: 'Expert Mediators' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('register')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('hero.cta')}
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 group-hover:animate-pulse-soft">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of legal mediation with our comprehensive digital platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI-Powered Legal Assistant
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get instant legal guidance and support through our advanced AI system. 
                Available 24/7 to help you understand your legal options and prepare for mediation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Instant legal advice and guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Multi-language support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">24/7 availability</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 text-sm font-medium">AI</span>
                  </div>
                  <span className="text-gray-900 font-medium">Legal Assistant</span>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="bg-gray-50 p-3 rounded-lg">
                    "How can I help you with your legal questions today?"
                  </p>
                  <p className="bg-primary-50 p-3 rounded-lg text-right">
                    "I need help with a contract dispute"
                  </p>
                  <p className="bg-gray-50 p-3 rounded-lg">
                    "I can help guide you through contract dispute resolution. Let me connect you with a qualified mediator..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Resolve Your Dispute?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of satisfied clients who have resolved their legal matters efficiently through our platform
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};