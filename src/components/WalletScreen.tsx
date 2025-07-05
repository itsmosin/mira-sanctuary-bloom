
import { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Shield, Eye, EyeOff, MoreHorizontal, Home, TrendingUp, AlertTriangle, Heart, BookOpen, Briefcase, Info, Plus, Send, Wallet } from 'lucide-react';

interface WalletScreenProps {
  onNavigate: (screen: 'wallet' | 'progress' | 'emergency') => void;
}

export const WalletScreen = ({ onNavigate }: WalletScreenProps) => {
  const [activeTab, setActiveTab] = useState<'received' | 'spent' | 'locked'>('received');
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [showSuggestedActions, setShowSuggestedActions] = useState(true);
  const balance = 247.50;
  const healingCredits = 28;
  const milestonesCompleted = 3;

  console.log('Wallet screen - active tab:', activeTab);

  // Program pathways
  const programPaths = [
    {
      id: 'wellness',
      label: 'Wellness Support',
      icon: '💙',
      cta: 'Start Session',
      description: 'Mental Health & Therapy',
      status: 'Active'
    },
    {
      id: 'education',
      label: 'Skill Development',
      icon: '📚',
      cta: 'View Courses',
      description: 'Education & Training',
      status: 'Available'
    },
    {
      id: 'safety',
      label: 'Safety Planning',
      icon: '🛡',
      cta: 'Setup Protection',
      description: 'Emergency Protocols',
      status: 'Recommended'
    },
    {
      id: 'opportunities',
      label: 'Income Generation',
      icon: '💼',
      cta: 'Browse Jobs',
      description: 'Verified Opportunities',
      status: 'Available'
    }
  ];

  const quickActions = [
    'Complete your security setup to unlock additional features',
    'Add a trusted contact for emergency situations',
    'Finish onboarding to access your full grant allocation'
  ];

  const transactions = {
    received: [
      { id: 1, amount: 150.00, from: 'MIRA Foundation Grant', date: '2 days ago', type: 'grant', status: 'Completed' },
      { id: 2, amount: 97.50, from: 'Skills Milestone Reward', date: '1 week ago', type: 'achievement', status: 'Completed' },
    ],
    spent: [
      { id: 3, amount: 45.00, for: 'Essential Supplies', date: 'Yesterday', type: 'essential', status: 'Completed' },
      { id: 4, amount: 25.00, for: 'Transportation', date: '3 days ago', type: 'transport', status: 'Completed' },
    ],
    locked: [
      { id: 5, amount: 100.00, for: 'Emergency Reserve Fund', date: 'Auto-allocated', type: 'reserve', status: 'Protected' },
      { id: 6, amount: 50.00, for: 'Program Completion Bonus', date: 'Scheduled Release', type: 'milestone', status: 'Pending' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('wallet')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
            >
              <Wallet className="w-4 h-4" />
              <span className="font-medium">Dashboard</span>
            </button>
            
            <div className="h-4 w-px bg-gray-300"></div>
            
            <button
              onClick={() => onNavigate('progress')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">Progress</span>
              {milestonesCompleted > 0 && (
                <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  {milestonesCompleted}
                </span>
              )}
            </button>
          </div>
          
          <button
            onClick={() => onNavigate('emergency')}
            className="p-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors"
          >
            <AlertTriangle className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Balance Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Account Balance</h2>
                  <p className="text-sm text-gray-600 mt-1">Available funds for approved expenses</p>
                </div>
                <button
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {balanceVisible ? <Eye className="w-4 h-4 text-gray-500" /> : <EyeOff className="w-4 h-4 text-gray-500" />}
                </button>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {balanceVisible ? `$${balance.toFixed(2)}` : '••••••'}
                  <span className="text-lg font-normal text-gray-500 ml-2">USDC</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span>Health, Education & Essentials</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span>Next funding: July 10</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-6 flex items-start space-x-3">
                <Info className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-purple-800 font-medium mb-1">Gasless Transactions</p>
                  <p className="text-xs text-purple-700">No transaction fees. Your funds are automatically protected.</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Transfer</span>
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Request</span>
                </button>
                <button className="px-4 py-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Program Pathways */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Available Programs</h3>
              <p className="text-sm text-gray-600 mb-6">Choose your path to financial independence</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programPaths.map((path) => (
                  <div
                    key={path.id}
                    className="p-4 rounded-lg border border-gray-200 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">{path.icon}</div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        path.status === 'Active' ? 'bg-green-100 text-green-700' :
                        path.status === 'Recommended' ? 'bg-amber-100 text-amber-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {path.status}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{path.description}</h4>
                    <p className="text-sm text-gray-600 mb-3">{path.label}</p>
                    <button className="text-sm text-purple-600 group-hover:text-purple-700 font-medium">
                      {path.cta} →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Transaction History</h3>
              
              <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
                {[
                  { key: 'received', label: 'Received' },
                  { key: 'spent', label: 'Spent' },
                  { key: 'locked', label: 'Reserved' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {transactions[activeTab].map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-gray-900">
                          {'amount' in transaction ? `$${transaction.amount.toFixed(2)}` : ''}
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs ${
                          transaction.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          transaction.status === 'Protected' ? 'bg-blue-100 text-blue-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {transaction.status}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {'from' in transaction ? transaction.from : transaction.for}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {transaction.date}
                      </div>
                    </div>
                  </div>
                ))}
                
                {transactions[activeTab].length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Heart className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm">No transactions yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Progress Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Overview</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Wellness Credits</div>
                      <div className="text-xs text-gray-600">Program engagement</div>
                    </div>
                  </div>
                  <div className="text-xl font-semibold text-purple-600">{healingCredits}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Support Received</div>
                      <div className="text-xs text-gray-600">Total funding</div>
                    </div>
                  </div>
                  <div className="text-xl font-semibold text-green-600">${balance.toFixed(0)}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Milestones</div>
                      <div className="text-xs text-gray-600">Completed goals</div>
                    </div>
                  </div>
                  <div className="text-xl font-semibold text-amber-600">{milestonesCompleted}</div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-800">
                  💡 Your progress can be privately verified for opportunities
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            {showSuggestedActions && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Actions</h3>
                
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <div key={index} className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <p className="text-sm text-gray-700 mb-3">{action}</p>
                      <div className="flex space-x-2">
                        <button className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                          Later
                        </button>
                        <button className="text-xs text-white bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-md transition-colors">
                          Complete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowSuggestedActions(false)}
                  className="w-full mt-4 text-xs text-gray-500 hover:text-gray-700 py-2 transition-colors"
                >
                  Hide recommendations
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
