import React, { useState } from 'react';
import { Plus, Clock, CheckCircle, FileText, Calendar, Video, MessageSquare, CreditCard } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Case } from '../../types';

interface ApplicantDashboardProps {
  onNavigate: (page: string) => void;
}

export const ApplicantDashboard: React.FC<ApplicantDashboardProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const mockCases: Case[] = [
    {
      id: '1',
      title: 'Contract Dispute Resolution',
      description: 'Disagreement over contract terms with supplier',
      category: 'Commercial',
      status: 'in_progress',
      applicantId: '1',
      mediatorId: '2',
      createdAt: new Date('2024-01-15'),
      scheduledDate: new Date('2024-02-20'),
      documents: [],
      amount: 5000000
    },
    {
      id: '2',
      title: 'Employment Termination Issue',
      description: 'Dispute regarding termination compensation',
      category: 'Employment',
      status: 'completed',
      applicantId: '1',
      createdAt: new Date('2024-01-10'),
      documents: [],
      amount: 2500000
    }
  ];

  const stats = [
    { label: t('dashboard.new_case'), value: '3', icon: Plus, color: 'bg-blue-500' },
    { label: t('dashboard.pending'), value: '2', icon: Clock, color: 'bg-yellow-500' },
    { label: t('dashboard.completed'), value: '5', icon: CheckCircle, color: 'bg-green-500' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button 
            onClick={() => onNavigate('submit-case')}
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Plus className="h-5 w-5 text-primary-600" />
            <span className="font-medium">{t('case.submit')}</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <MessageSquare className="h-5 w-5 text-primary-600" />
            <span className="font-medium">{t('ai.consultation')}</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="h-5 w-5 text-primary-600" />
            <span className="font-medium">Schedule Meeting</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <FileText className="h-5 w-5 text-primary-600" />
            <span className="font-medium">Documents</span>
          </button>
        </div>
      </div>

      {/* Recent Cases */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Cases</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {mockCases.map((case_) => (
              <div key={case_.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{case_.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{case_.category}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Created: {case_.createdAt.toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(case_.status)}`}>
                    {case_.status.replace('_', ' ').toUpperCase()}
                  </span>
                  {case_.status === 'in_progress' && (
                    <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <Video className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCases = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">My Cases</h3>
        <button 
          onClick={() => onNavigate('submit-case')}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>New Case</span>
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {mockCases.map((case_) => (
            <div key={case_.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{case_.title}</h4>
                  <p className="text-gray-600 mt-1">{case_.description}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>Category: {case_.category}</span>
                    <span>Created: {case_.createdAt.toLocaleDateString()}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(case_.status)}`}>
                  {case_.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              {case_.scheduledDate && (
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>Next meeting: {case_.scheduledDate.toLocaleDateString()}</span>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <FileText className="h-4 w-4" />
                  <span>Documents</span>
                </button>
                {case_.status === 'in_progress' && (
                  <button className="flex items-center space-x-2 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                    <Video className="h-4 w-4" />
                    <span>Join Meeting</span>
                  </button>
                )}
                <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <CreditCard className="h-4 w-4" />
                  <span>Payment</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Clock },
    { id: 'cases', label: 'My Cases', icon: FileText },
    { id: 'payments', label: 'Payments', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('dashboard.welcome')}</h1>
          <p className="text-gray-600 mt-2">Manage your mediation cases and track progress</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'cases' && renderCases()}
        {activeTab === 'payments' && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment History</h3>
            <p className="text-gray-600">Payment management interface would be implemented here.</p>
          </div>
        )}
      </div>
    </div>
  );
};