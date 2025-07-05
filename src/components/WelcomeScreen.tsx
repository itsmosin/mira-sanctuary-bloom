
import { useState } from 'react';
import { Flower2, Shield, Heart, Wallet, MapPin, Lock, CheckCircle, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onSetupComplete: () => void;
}

export const WelcomeScreen = ({ onSetupComplete }: WelcomeScreenProps) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [userName] = useState('Sarah');

  const handleVerifyClick = () => {
    console.log('Starting SafeID verification...');
    setIsVerifying(true);
    
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 2000);
  };

  const handleSetupChoice = (choice: string) => {
    console.log('User chose:', choice);
    onSetupComplete();
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to MIRA, {userName}
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Your secure financial identity is ready. Choose how you'd like to begin your journey.
            </p>
          </div>

          {/* Setup Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => handleSetupChoice('wallet')}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 text-left group"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Wallet className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Setup Wallet</h3>
              <p className="text-sm text-gray-600 mb-4">Initialize your secure USDC wallet for receiving funds</p>
              <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                <span className="text-sm font-medium">Get started</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </button>

            <button
              onClick={() => handleSetupChoice('recovery')}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-rose-300 hover:shadow-md transition-all duration-200 text-left group"
            >
              <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
                <MapPin className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Path</h3>
              <p className="text-sm text-gray-600 mb-4">Select programs that align with your goals and needs</p>
              <div className="flex items-center text-rose-600 group-hover:text-rose-700">
                <span className="text-sm font-medium">Explore options</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </button>

            <button
              onClick={() => handleSetupChoice('safety')}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-200 text-left group"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <Lock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Setup</h3>
              <p className="text-sm text-gray-600 mb-4">Configure emergency protocols and account protection</p>
              <div className="flex items-center text-amber-600 group-hover:text-amber-700">
                <span className="text-sm font-medium">Setup protection</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Your Data is Protected</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-600">End-to-end encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-600">Zero-knowledge verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-600">Self-custody wallet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
            <Flower2 className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to MIRA
          </h1>
          <p className="text-lg text-gray-600">
            Create your secure digital identity to access financial support and rebuild your future.
          </p>
        </div>

        {/* Verification Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-600 font-medium">Secure Identity Verification</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              SafeID Creation
            </h2>
            <p className="text-gray-600 text-sm">
              We'll verify your information securely. Your privacy is our priority.
            </p>
          </div>

          <button
            onClick={handleVerifyClick}
            disabled={isVerifying}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
          >
            {isVerifying ? (
              <span className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Verifying securely...
              </span>
            ) : (
              'Create SafeID'
            )}
          </button>
        </div>

        {/* Security Features */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Why MIRA is Different</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
              <div>
                <div className="font-medium text-gray-900 text-sm">Privacy First</div>
                <div className="text-xs text-gray-600">Your information stays completely private</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
              <div>
                <div className="font-medium text-gray-900 text-sm">Self-Custody</div>
                <div className="text-xs text-gray-600">You maintain full control of your funds</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
              <div>
                <div className="font-medium text-gray-900 text-sm">Progress Tracking</div>
                <div className="text-xs text-gray-600">Build verifiable credentials at your own pace</div>
              </div>
            </div>
          </div>
        </div>

        {/* Encouragement */}
        <div className="mt-8 text-center">
          <Heart className="w-4 h-4 text-rose-400 mx-auto mb-2" />
          <p className="text-xs text-gray-500">
            Every journey begins with a single step
          </p>
        </div>
      </div>
    </div>
  );
};
