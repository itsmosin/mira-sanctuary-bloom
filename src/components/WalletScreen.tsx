import React, { useState } from 'react';
import { Flower2, Shield, Heart, Wallet, MapPin, Lock, CheckCircle, ArrowRight, MessageCircle, Trophy, Clock, TrendingUp, Lightbulb } from 'lucide-react';

interface WalletScreenProps {
  onNavigate: (screen: string) => void;
}

const pathOptions = [
  {
    id: 'therapy',
    title: 'Emotional Healing',
    description: 'Connect with therapists and support groups',
    icon: Heart,
    color: 'text-rose-500',
    gradient: 'from-rose-400 to-rose-600',
    cta: 'Start healing'
  },
  {
    id: 'learning',
    title: 'Skills & Education',
    description: 'Access courses and workshops to build new skills',
    icon: BookOpen,
    color: 'text-blue-500',
    gradient: 'from-blue-400 to-blue-600',
    cta: 'Begin learning'
  },
  {
    id: 'shelter',
    title: 'Safe Housing',
    description: 'Find temporary or permanent housing options',
    icon: MapPin,
    color: 'text-green-500',
    gradient: 'from-green-400 to-green-600',
    cta: 'Find shelter'
  }
];

const transactionHistory = {
  received: [
    {
      title: 'Emergency Grant',
      description: 'Received from MIRA Fund',
      amount: '+ $100.00',
      date: 'July 8, 2024',
      icon: Heart,
      color: 'bg-rose-100'
    },
    {
      title: 'Skills Workshop',
      description: 'Payment from Learn & Earn',
      amount: '+ $50.00',
      date: 'July 5, 2024',
      icon: BookOpen,
      color: 'bg-blue-100'
    }
  ],
  spent: [
    {
      title: 'Grocery Purchase',
      description: 'Spent at Safeway',
      amount: '- $32.50',
      date: 'July 7, 2024',
      icon: Wallet,
      color: 'bg-purple-100'
    },
    {
      title: 'Therapy Session',
      description: 'Paid to Dr. Emily Carter',
      amount: '- $60.00',
      date: 'July 3, 2024',
      icon: Heart,
      color: 'bg-rose-100'
    }
  ],
  protected: [
    {
      title: 'Account Protection',
      description: 'Emergency fund locked',
      amount: '+ $247.50',
      date: 'July 1, 2024',
      icon: Shield,
      color: 'bg-green-100'
    }
  ]
};

const suggestedActions = [
  {
    text: 'Complete your SafeID verification to unlock additional benefits'
  },
  {
    text: 'Explore available therapy sessions in your area'
  },
  {
    text: 'Enroll in a budgeting workshop to manage your funds effectively'
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

const BookOpen = () => null;

export const WalletScreen = ({ onNavigate }: WalletScreenProps) => {
  const [activePathIndex, setActivePathIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('received');

  const handlePathClick = (index: number) => {
    setActivePathIndex(index);
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
                  <Flower2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
                    MIRA
                  </h1>
                  <p className="text-sm text-purple-600">Your Sanctuary</p>
                </div>
              </div>
            </div>

            {/* Your Path Progress */}
            <div className="hidden md:flex items-center space-x-6 bg-gradient-to-r from-purple-100 to-rose-100 px-6 py-3 rounded-full">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-purple-700">Your Path:</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-purple-200"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gray-200"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-purple-200 px-3 py-1 rounded-full">
                <Trophy className="w-3 h-3 text-purple-600" />
                <span className="text-xs font-medium text-purple-700">3 Milestones</span>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onNavigate('chat')}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-rose-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Chat with MIRA</span>
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
            {/* Balance Card - Enhanced with purple theme */}
            <div className="bg-gradient-to-r from-purple-500 to-rose-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Your Safe Balance</p>
                  <h2 className="text-4xl font-bold">$247.50</h2>
                  <p className="text-purple-100 text-sm mt-1">USDC • No gas fees needed</p>
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
                  <p className="text-purple-100 text-xs">Spending Rules</p>
                  <p className="text-white text-sm font-medium">Health, Education & Safety</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-purple-100 text-xs">Next Grant</p>
                  <p className="text-white text-sm font-medium">July 15 • $50</p>
                </div>
              </div>
            </div>

            {/* Recovery Path - Enhanced */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Heart className="w-5 h-5 text-rose-500 mr-2" />
                Your Recovery Path
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pathOptions.map((option, index) => {
                  const Icon = option.icon;
                  const isActive = activePathIndex === index;
                  
                  return (
                    <button
                      key={option.id}
                      onClick={() => handlePathClick(index)}
                      className={`p-6 rounded-xl text-left transition-all duration-200 border-2 ${
                        isActive
                          ? `bg-gradient-to-r ${option.gradient} text-white border-transparent shadow-lg`
                          : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : option.color}`} />
                        <h4 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                          {option.title}
                        </h4>
                      </div>
                      <p className={`text-sm mb-4 ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                        {option.description}
                      </p>
                      <div className={`flex items-center text-sm font-medium ${
                        isActive ? 'text-white' : option.color
                      }`}>
                        <span>{option.cta}</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Transaction History - Enhanced */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Clock className="w-5 h-5 text-purple-500 mr-2" />
                  Recent Activity
                </h3>
                <div className="flex bg-purple-100 rounded-lg p-1">
                  {['Received', 'Spent', 'Protected'].map((tab) => (
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
                {transactionHistory[activeTab as keyof typeof transactionHistory].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.color}`}>
                        <transaction.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.title}</p>
                        <p className="text-sm text-gray-600">{transaction.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
                        {transaction.amount}
                      </p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Tracking - Enhanced */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                Your Progress
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Healing Credits</span>
                    <span className="text-lg font-bold text-rose-500">28</span>
                  </div>
                  <div className="w-full bg-rose-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-rose-400 to-rose-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Total Aid Received</span>
                    <span className="text-lg font-bold text-green-500">$247.50</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-rose-100 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Trophy className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-700">Milestones</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-900">3 Completed</p>
                  <p className="text-xs text-purple-600 mt-1">
                    Share progress privately with sponsors or job platforms
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

            {/* Support Access */}
            <div className="bg-gradient-to-r from-purple-100 to-rose-100 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">24/7 Support</h3>
              <p className="text-sm text-purple-700 mb-4">MIRA is always here when you need guidance</p>
              <button
                onClick={() => onNavigate('chat')}
                className="w-full bg-gradient-to-r from-purple-500 to-rose-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
