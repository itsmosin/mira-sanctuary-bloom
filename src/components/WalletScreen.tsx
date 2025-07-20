import React, { useState } from 'react';
import { GraduationCap, Shield, Heart, Wallet, BookOpen, Users, CheckCircle, ArrowRight, MessageCircle, Trophy, Clock, TrendingUp, Lightbulb, Receipt } from 'lucide-react';

interface WalletScreenProps {
  onNavigate: (screen: string) => void;
}

const scholarshipCategories = [
  {
    id: 'books',
    title: 'Books & Materials',
    description: 'Textbooks, stationery, digital resources',
    icon: BookOpen,
    color: 'text-blue-500',
    gradient: 'from-blue-400 to-blue-600',
    cta: 'Browse bookstores'
  },
  {
    id: 'tuition',
    title: 'Tuition & Courses',
    description: 'University fees, training programs, certifications',
    icon: GraduationCap,
    color: 'text-purple-500',
    gradient: 'from-purple-400 to-purple-600',
    cta: 'Find institutions'
  },
  {
    id: 'transport',
    title: 'Transport',
    description: 'Bus passes, metro cards, rideshare credits',
    icon: Users,
    color: 'text-green-500',
    gradient: 'from-green-400 to-green-600',
    cta: 'View transport'
  }
];

const voucherHistory = {
  received: [
    {
      title: 'Ministry of Education CLT',
      description: 'Books voucher (30 days validity)',
      amount: '+ 50 CLT',
      date: 'July 8, 2024',
      icon: BookOpen,
      color: 'bg-blue-100'
    },
    {
      title: 'University Scholarship DAO',
      description: 'Tuition voucher (90 days validity)',
      amount: '+ 200 CLT',
      date: 'July 5, 2024',
      icon: GraduationCap,
      color: 'bg-purple-100'
    }
  ],
  redeemed: [
    {
      title: 'Campus Bookstore',
      description: 'Textbooks purchased',
      amount: '- 25 CLT',
      date: 'July 7, 2024',
      icon: Receipt,
      color: 'bg-green-100'
    },
    {
      title: 'Online Learning Platform',
      description: 'Course enrollment fee',
      amount: '- 15 CLT',
      date: 'July 3, 2024',
      icon: Users,
      color: 'bg-amber-100'
    }
  ],
  expired: [
    {
      title: 'Transport Voucher',
      description: 'Metro CLT expired unused',
      amount: '10 CLT',
      date: 'June 30, 2024',
      icon: Users,
      color: 'bg-gray-100'
    }
  ]
};

const suggestedActions = [
  {
    text: 'Complete your Scholar ID verification to unlock additional scholarships'
  },
  {
    text: 'Browse verified educational vendors in your area'
  },
  {
    text: 'Check new scholarship opportunities from DAO and CSR funds'
  }
];

interface ChatScreenProps {
  onNavigate: (screen: string) => void;
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'mira';
  timestamp: Date;
  mode?: string;
}

interface ChatMode {
  id: string;
  name: string;
  icon: any;
  color: string;
  description: string;
  placeholder: string;
}

export const WalletScreen = ({ onNavigate }: WalletScreenProps) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('received');

  const handleCategoryClick = (index: number) => {
    setActiveCategoryIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50">
      {/* Enhanced Header with Your Path */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-rose-400 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
                    ScholarFlow
                  </h1>
                  <p className="text-sm text-purple-600">Student Wallet</p>
                </div>
              </div>
            </div>

            {/* Scholar Status */}
            <div className="hidden md:flex items-center space-x-6 bg-gradient-to-r from-purple-100 to-rose-100 px-6 py-3 rounded-full">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-purple-700">Scholar ID Verified</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-purple-600">Active</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-purple-200 px-3 py-1 rounded-full">
                <Trophy className="w-3 h-3 text-purple-600" />
                <span className="text-xs font-medium text-purple-700">3 Active CLTs</span>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onNavigate('chat')}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-rose-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Support Chat</span>
              </button>
              <button
                onClick={() => onNavigate('emergency')}
                className="p-2 text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              >
                <Shield className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Balance & Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* CLT Voucher Balance */}
            <div className="bg-gradient-to-r from-purple-500 to-rose-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Active CLT Balance</p>
                  <h2 className="text-4xl font-bold">225 CLT</h2>
                  <p className="text-purple-100 text-sm mt-1">IOTA • Purpose-bound tokens</p>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <Wallet className="w-8 h-8 text-white mb-2" />
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-purple-100 text-xs">Valid For</p>
                  <p className="text-white text-sm font-medium">Books, Tuition & Transport</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-purple-100 text-xs">Expires</p>
                  <p className="text-white text-sm font-medium">July 15 • 15 days</p>
                </div>
              </div>
            </div>

            {/* Scholarship Categories */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                Education Categories
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarshipCategories.map((category, index) => {
                  const Icon = category.icon;
                  const isActive = activeCategoryIndex === index;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(index)}
                      className={`p-6 rounded-xl text-left transition-all duration-200 border-2 ${
                        isActive
                          ? `bg-gradient-to-r ${category.gradient} text-white border-transparent shadow-lg`
                          : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : category.color}`} />
                        <h4 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                          {category.title}
                        </h4>
                      </div>
                      <p className={`text-sm mb-4 ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                        {category.description}
                      </p>
                      <div className={`flex items-center text-sm font-medium ${
                        isActive ? 'text-white' : category.color
                      }`}>
                        <span>{category.cta}</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CLT Voucher History */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Clock className="w-5 h-5 text-purple-500 mr-2" />
                  CLT Activity
                </h3>
                <div className="flex bg-purple-100 rounded-lg p-1">
                  {['Received', 'Redeemed', 'Expired'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase())}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeTab === tab.toLowerCase()
                          ? 'bg-white text-purple-700 shadow-sm'
                          : 'text-purple-600 hover:text-purple-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {voucherHistory[activeTab as keyof typeof voucherHistory].map((voucher, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${voucher.color}`}>
                        <voucher.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{voucher.title}</p>
                        <p className="text-sm text-gray-600">{voucher.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${voucher.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
                        {voucher.amount}
                      </p>
                      <p className="text-xs text-gray-500">{voucher.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Scholarship Analytics */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                Your Scholar Journey
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">CLTs Redeemed</span>
                    <span className="text-lg font-bold text-blue-500">40</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Total Scholarship Value</span>
                    <span className="text-lg font-bold text-green-500">250 CLT</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-rose-100 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Trophy className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-700">Scholar Status</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-900">Verified Student</p>
                  <p className="text-xs text-purple-600 mt-1">
                    Build your academic credentials with soulbound NFTs
                  </p>
                </div>
              </div>
            </div>

            {/* Suggested Actions - Enhanced */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                Gentle Nudges
              </h3>
              
              <div className="space-y-4">
                {suggestedActions.map((action, index) => (
                  <div key={index} className="bg-white/50 rounded-lg p-4 border-l-4 border-purple-300">
                    <p className="text-sm text-gray-700 mb-3">{action.text}</p>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full hover:bg-purple-200 transition-colors">
                        Okay, I'll do it
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors">
                        Not now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Support */}
            <div className="bg-gradient-to-r from-purple-100 to-rose-100 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Need Help?</h3>
              <p className="text-sm text-purple-700 mb-4">Get support with CLT redemption or technical issues</p>
              <button
                onClick={() => onNavigate('chat')}
                className="w-full bg-gradient-to-r from-purple-500 to-rose-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
