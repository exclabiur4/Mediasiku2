import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle, Video, FileText, Star, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Case } from '../../types';

interface MediatorDashboardProps {
  onNavigate: (page: string) => void;
}

export const MediatorDashboard: React.FC<MediatorDashboardProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for mediator
  const mockAssignedCases: Case[] = [
    {
      id: '1',
      title: 'Contract Dispute Resolution',
      description: 'Commercial contract disagreement',
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
      id: '3',
      title: 'Property Boundary Dispute',
      description: 'Neighbor property line disagreement',
      category: 'Property',
      status: 'pending',
      applicantId: '3',
      mediatorId: '2',
      createdAt: new Date('2024-01-18'),
      documents: [],
      amount: 3000000
    }
  ];

  const stats = [
    { label: 'Active Cases', value: '8', icon: Users, color: 'bg-blue-500' },
    { label: 'Completed', value: '24', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'This Month', value: '6', icon: Calendar, color: 'bg-purple-500' },
    { label: 'Rating', value: '4.8', icon: Star, color: 'bg-yellow-500' },
  ];

  const upcomingMeetings = [
    { id: '1', title: 'Contract Dispute', time: '2:00 PM', date: 'Today', participants: 3 },
    { id: '2', title: 'Employment Issue', time: '10:00 AM', date: 'Tomorrow', participants: 2 },
    { id: '3', title: 'Property Dispute', time: '3:30 PM', date: 'Feb 22', participants: 4 },
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Meetings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary-600" />
              Upcoming Meetings
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium text-gray-900">{meeting.title}</h4>
                    <p className="text-sm text-gray-600">{meeting.date} at {meeting.time}</p>
                    <p className="text-xs text-gray-500">{meeting.participants} participants</p>
                  </div>
                  <button className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Video className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">Case #1234 completed successfully</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">New case assigned: Property Dispute</p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">Meeting scheduled for tomorrow</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCases = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Assigned Cases</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {mockAssignedCases.map((case_) => (
            <div key={case_.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">{case_.title}</h4>
                  <p className="text-gray-600 mt-1">{case_.description}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>Category: {case_.category}</span>
                    <span>Assigned: {case_.createdAt.toLocaleDateString()}</span>
                    <span>Amount: Rp {case_.amount?.toLocaleString()}</span>
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
                  <span>Case Files</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  <Video className="h-4 w-4" />
                  <span>Start Meeting</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Schedule & Availability</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">This Week's Schedule</h4>
            <div className="space-y-3">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{meeting.title}</p>
                    <p className="text-sm text-gray-600">{meeting.date} - {meeting.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {meeting.participants} people
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Availability Settings</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="text-sm text-gray-600">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Saturday</span>
                <span className="text-sm text-gray-600">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Sunday</span>
                <span className="text-sm text-gray-600">Unavailable</span>
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                Update Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Clock },
    { id: 'cases', label: 'My Cases', icon: FileText },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mediator Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your mediation cases and schedule</p>
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
        {activeTab === 'schedule' && renderSchedule()}
        {activeTab === 'earnings' && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings & Statistics</h3>
            <p className="text-gray-600">Earnings tracking and financial reports would be implemented here.</p>
          </div>
        )}
      </div>
    </div>
  );
};