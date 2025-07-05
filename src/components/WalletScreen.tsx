
import { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Shield, Eye, EyeOff, MoreHorizontal, Home, TrendingUp, AlertTriangle, Heart, BookOpen, Briefcase, Info } from 'lucide-react';

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

  // Recovery path options
  const recoveryPaths = [
    {
      id: 'mental-health',
      label: 'Feel better, slowly.',
      icon: '💙',
      cta: 'Start First Session',
      description: 'Mental Health Support'
    },
    {
      id: 'education',
      label: 'Learn new skills.',
      icon: '📚',
      cta: 'Browse Learning Tools',
      description: 'Education & Skills'
    },
    {
      id: 'safety',
      label: 'Prepare for anything.',
      icon: '🛡',
      cta: 'Set Emergency Contact',
      description: 'Safety Planning'
    },
    {
      id: 'income',
      label: 'Earn & build.',
      icon: '💼',
      cta: 'Explore SafeJobs',
      description: 'Income Opportunities'
    }
  ];

  const suggestedActions = [
    'Add a trusted person in case of emergency',
    'Finish your health intro session to unlock your second aid release',
    'Complete your first wallet transaction'
  ];

  const transactions = {
    received: [
      { id: 1, amount: 150.00, from: 'Emergency Aid Fund', date: '2 days ago', type: 'aid' },
      { id: 2, amount: 97.50, from: 'Skills Program Completion', date: '1 week ago', type: 'reward' },
    ],
    spent: [
      { id: 3, amount: 45.00, for: 'Groceries', date: 'Yesterday', type: 'essential' },
      { id: 4, amount: 25.00, for: 'Transportation', date: '3 days ago', type: 'essential' },
    ],
    locked: [
      { id: 5, amount: 100.00, for: 'Emergency Fund (Untouchable)', date: 'Auto-saved', type: 'locked' },
      { id: 6, amount: 50.00, for: 'Skills Course Fee', date: 'Reserved', type: 'reserved' },
    ]
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-50/30 to-rose-50/30">
      {/* Enhanced Navigation */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigate('wallet')}
            className="flex items-center space-x-2 px-5 py-3 rounded-full bg-purple-100 text-purple-700 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">My Safe Space</span>
          </button>
          
          <div className="flex items-center space-x-2 text-purple-300">
            <div className="w-1 h-1 rounded-full bg-purple-300"></div>
            <div className="w-1 h-1 rounded-full bg-purple-300"></div>
            <div className="w-1 h-1 rounded-full bg-purple-300"></div>
          </div>
          
          <button
            onClick={() => onNavigate('progress')}
            className="flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-rose-50 to-purple-50 text-purple-600 hover:from-rose-100 hover:to-purple-100 transition-all duration-300 shadow-sm border border-purple-100"
          >
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Your Path</span>
            <div className="flex items-center space-x-1 ml-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-xs font-medium text-purple-600">{milestonesCompleted}</span>
              </div>
            </div>
          </button>
        </div>
        
        <button
          onClick={() => onNavigate('emergency')}
          className="p-3 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors shadow-sm"
        >
          <AlertTriangle className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Balance Card */}
        <div className="mira-card p-6 safe-glow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">Your Safe Funds</h2>
            <button
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {balanceVisible ? <Eye className="w-4 h-4 text-gray-500" /> : <EyeOff className="w-4 h-4 text-gray-500" />}
            </button>
          </div>
          
          <div className="mb-4">
            <div className="text-3xl font-light text-gray-800 mb-1">
              {balanceVisible ? `$${balance.toFixed(2)} USDC` : '••••••'}
            </div>
            <p className="text-sm text-gray-600 mb-2">
              💵 This can be used for health, food & education
            </p>
            <p className="text-xs text-green-600 flex items-center">
              📆 Next scheduled donation: July 10 (via WomenSafe NGO)
            </p>
          </div>

          <div className="bg-purple-50 p-3 rounded-xl mb-4 flex items-start space-x-2">
            <Info className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-purple-800">
              You don't need gas fees. This wallet works automatically.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button className="flex-1 mira-button-secondary flex items-center justify-center space-x-2">
              <ArrowDownLeft className="w-4 h-4" />
              <span>Receive</span>
            </button>
            <button className="flex-1 mira-button-secondary flex items-center justify-center space-x-2">
              <ArrowUpRight className="w-4 h-4" />
              <span>Spend</span>
            </button>
            <button className="px-4 py-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Recovery Paths */}
        <div className="mira-card p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Your Path</h3>
          <p className="text-sm text-gray-600 mb-4">Choose your recovery lane without pressure. Go at your own pace.</p>
          
          <div className="grid grid-cols-2 gap-3">
            {recoveryPaths.map((path) => (
              <button
                key={path.id}
                className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:from-purple-50 hover:to-rose-50 transition-all duration-300 text-left group border border-gray-100 hover:border-purple-200"
              >
                <div className="text-2xl mb-2">{path.icon}</div>
                <div className="text-sm font-medium text-gray-800 mb-1">{path.description}</div>
                <div className="text-xs text-gray-600 mb-2">{path.label}</div>
                <div className="text-xs text-purple-600 group-hover:text-purple-700">{path.cta}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="mira-card p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">My Progress</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-xl">💗</div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Healing Credits Earned</div>
                  <div className="text-xs text-gray-600">Building your wellness</div>
                </div>
              </div>
              <div className="text-2xl font-light text-purple-600">{healingCredits}</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-xl">📊</div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Aid Received</div>
                  <div className="text-xs text-gray-600">Support you've gained</div>
                </div>
              </div>
              <div className="text-lg font-light text-green-600">${balance.toFixed(0)}</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-xl">🥇</div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Milestones Completed</div>
                  <div className="text-xs text-gray-600">Steps forward</div>
                </div>
              </div>
              <div className="text-2xl font-light text-amber-600">{milestonesCompleted}</div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-xl">
            <p className="text-xs text-blue-800">
              💡 You can share this progress privately with sponsors or job platforms later.
            </p>
          </div>
        </div>

        {/* Suggested Actions */}
        {showSuggestedActions && (
          <div className="mira-card p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Gentle Next Steps</h3>
            
            <div className="space-y-3">
              {suggestedActions.map((action, index) => (
                <div key={index} className="flex items-start justify-between p-3 rounded-xl bg-gradient-to-r from-purple-50 to-rose-50">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">{action}</p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded">
                      Not now
                    </button>
                    <button className="text-xs text-purple-600 hover:text-purple-700 px-3 py-1 rounded-full bg-white/50 hover:bg-white/80">
                      Okay, I'll do it
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowSuggestedActions(false)}
              className="w-full mt-4 text-xs text-gray-500 hover:text-gray-700 py-2"
            >
              Hide suggestions for now
            </button>
          </div>
        )}

        {/* Transaction History */}
        <div className="mira-card p-6">
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-full">
            {[
              { key: 'received', label: 'Received' },
              { key: 'spent', label: 'Spent' },
              { key: 'locked', label: 'Protected' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-white text-purple-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {transactions[activeTab].map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm">
                    {'amount' in transaction ? `$${transaction.amount.toFixed(2)}` : ''}
                  </div>
                  <div className="text-xs text-gray-600">
                    {'from' in transaction ? `From ${transaction.from}` : `For ${transaction.for}`}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {transaction.date}
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs ${
                  transaction.type === 'aid' ? 'bg-green-100 text-green-700' :
                  transaction.type === 'reward' ? 'bg-purple-100 text-purple-700' :
                  transaction.type === 'essential' ? 'bg-blue-100 text-blue-700' :
                  transaction.type === 'locked' ? 'bg-gray-200 text-gray-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {transaction.type === 'aid' ? 'Support' :
                   transaction.type === 'reward' ? 'Achievement' :
                   transaction.type === 'essential' ? 'Essential' :
                   transaction.type === 'locked' ? 'Protected' : 'Reserved'}
                </div>
              </div>
            ))}
            
            <div className="text-center py-4">
              <div className="inline-block p-2 rounded-full bg-rose-100 mb-2">
                <Heart className="w-4 h-4 text-rose-500" />
              </div>
              <p className="text-xs text-gray-600">
                {activeTab === 'spent' ? "You've supported your health today 🌸" : 
                 activeTab === 'received' ? "Every step forward counts 💝" :
                 "Your future is protected 🛡️"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
