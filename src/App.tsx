import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { ApplicantDashboard } from './components/Dashboard/ApplicantDashboard';
import { MediatorDashboard } from './components/Dashboard/MediatorDashboard';
import { AdminDashboard } from './components/Dashboard/AdminDashboard';
import { CaseSubmission } from './components/CaseSubmission';
import { Chatbot } from './components/Chatbot';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { user } = useAuth();

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      case 'register':
        return <Register onNavigate={setCurrentPage} />;
      case 'dashboard':
        if (!user) return <Login onNavigate={setCurrentPage} />;
        switch (user.role) {
          case 'applicant':
            return <ApplicantDashboard onNavigate={setCurrentPage} />;
          case 'mediator':
            return <MediatorDashboard onNavigate={setCurrentPage} />;
          case 'admin':
            return <AdminDashboard onNavigate={setCurrentPage} />;
          default:
            return <Home onNavigate={setCurrentPage} />;
        }
      case 'submit-case':
        return user ? <CaseSubmission onNavigate={setCurrentPage} /> : <Login onNavigate={setCurrentPage} />;
      case 'about':
        return (
          <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">About MediateOnline</h1>
                <div className="prose max-w-none text-gray-600 space-y-4">
                  <p>
                    MediateOnline is a comprehensive digital platform designed to revolutionize the way legal disputes are resolved. 
                    Our platform combines cutting-edge technology with expert legal mediation to provide fast, efficient, and 
                    cost-effective dispute resolution services.
                  </p>
                  <p>
                    Founded with the mission to make justice more accessible, we bridge the gap between traditional legal processes 
                    and modern technology needs. Our platform serves individuals, businesses, and organizations seeking alternative 
                    dispute resolution methods.
                  </p>
                  <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Our Mission</h2>
                  <p>
                    To democratize access to quality legal mediation services through innovative technology, making dispute resolution 
                    faster, more affordable, and accessible to everyone, regardless of their location or economic status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Online Mediation</h3>
                    <p className="text-gray-600">
                      Conduct mediation sessions through our secure video conferencing platform with experienced mediators.
                    </p>
                  </div>
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Legal Consultation</h3>
                    <p className="text-gray-600">
                      Get instant legal guidance and preliminary advice through our AI-powered consultation system.
                    </p>
                  </div>
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Document Management</h3>
                    <p className="text-gray-600">
                      Secure upload, storage, and digital signature capabilities for all your legal documents.
                    </p>
                  </div>
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Tracking</h3>
                    <p className="text-gray-600">
                      Real-time updates and comprehensive tracking of your case progress from start to resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderContent()}
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;