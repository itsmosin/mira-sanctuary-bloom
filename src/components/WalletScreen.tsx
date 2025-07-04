
import { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Shield, Eye, EyeOff, MoreHorizontal, Home, TrendingUp, AlertTriangle } from 'lucide-react';

interface WalletScreenProps {
  onNavigate: (screen: 'wallet' | 'progress' | 'emergency') => void;
}

export const WalletScreen = ({ onNavigate }: WalletScreenProps) => {
  const [activeTab, setActiveTab] = useState<'received' | 'spent' | 'locked'>('received');
  const [balanceVisible, setBalanceVisible] = useState(true);
  const balance = 247.50;

  console.log('Wallet screen - active tab:', activeTab);

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
    <div className="min-h-screen p-6">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => onNavigate('wallet')}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700"
          >
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">My Safe Space</span>
          </button>
          <button
            onClick={() => onNavigate('progress')}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 text-gray-600 hover:bg-white/80"
          >
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">My Path</span>
          </button>
        </div>
        <button
          onClick={() => onNavigate('emergency')}
          className="p-2 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200"
        >
          <AlertTriangle className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-md mx-auto animate-slide-up">
        {/* Balance Card */}
        <div className="mira-card p-6 mb-6 safe-glow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">Your Safe Funds</h2>
            <button
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {balanceVisible ? <Eye className="w-4 h-4 text-gray-500" /> : <EyeOff className="w-4 h-4 text-gray-500" />}
            </button>
          </div>
          
          <div className="mb-6">
            <div className="text-3xl font-light text-gray-800 mb-1">
              {balanceVisible ? `$${balance.toFixed(2)}` : '••••••'}
            </div>
            <p className="text-sm text-gray-600 flex items-center">
              <Shield className="w-3 h-3 mr-1" />
              This wallet is protected. Only you control it.
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

        {/* Transaction Tabs */}
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

          {/* Transaction List */}
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
          </div>
        </div>
      </div>
    </div>
  );
};
