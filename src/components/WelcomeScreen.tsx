
import { useState } from 'react';
import { Flower2, Shield, Heart, Wallet, MapPin, Lock, Compass } from 'lucide-react';

interface WelcomeScreenProps {
  onSetupComplete: () => void;
}

export const WelcomeScreen = ({ onSetupComplete }: WelcomeScreenProps) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [userName] = useState('Sarah'); // This would come from SafeID verification

  const handleVerifyClick = () => {
    console.log('Starting SafeID verification...');
    setIsVerifying(true);
    
    // Simulate verification process
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
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full animate-bloom">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6 safe-glow">
              <Flower2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-light text-gray-800 mb-3">
              Welcome to Your Sanctuary, {userName}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              You now have a private financial identity. This is your space — safe, silent, yours alone.
            </p>
          </div>

          {/* Action Cards */}
          <div className="space-y-4 mb-8">
            <button
              onClick={() => handleSetupChoice('wallet')}
              className="w-full mira-card p-6 text-left hover:bg-purple-50/50 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  <Wallet className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Set Up My Wallet</h3>
                  <p className="text-sm text-gray-600">Start receiving funds safely</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleSetupChoice('recovery')}
              className="w-full mira-card p-6 text-left hover:bg-rose-50/50 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-rose-100 group-hover:bg-rose-200 transition-colors">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Choose My Recovery Path</h3>
                  <p className="text-sm text-gray-600">Find your way forward</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleSetupChoice('safety')}
              className="w-full mira-card p-6 text-left hover:bg-amber-50/50 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-amber-100 group-hover:bg-amber-200 transition-colors">
                  <Lock className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Learn How to Keep My Account Safe</h3>
                  <p className="text-sm text-gray-600">Set up emergency protections</p>
                </div>
              </div>
            </button>
          </div>

          {/* Reassurance */}
          <div className="mt-8 text-center">
            <Heart className="w-4 h-4 text-rose-400 mx-auto mb-2" />
            <p className="text-xs text-gray-500">
              Take your time. Everything here is private and secure.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-bloom">
        {/* Header with flower icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 mb-6 safe-glow">
            <Flower2 className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-3xl font-light text-gray-800 mb-3">
            Welcome to MIRA
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Start fresh. Create your SafeID to access help, funds, and rebuild.
          </p>
        </div>

        {/* Main verification card */}
        <div className="mira-card p-8 mb-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-600 font-medium">Private & Secure</span>
            </div>
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              Your Safe Identity
            </h2>
            <p className="text-gray-600 text-sm">
              We'll verify your information privately. Only you control your data.
            </p>
          </div>

          <button
            onClick={handleVerifyClick}
            disabled={isVerifying}
            className="w-full mira-button-primary disabled:opacity-50 disabled:transform-none"
          >
            {isVerifying ? (
              <span className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Verifying safely...
              </span>
            ) : (
              'Verify My Info'
            )}
          </button>
        </div>

        {/* Trust indicators */}
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
            Your information stays private
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
            No one can access your wallet but you
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
            Build at your own pace
          </div>
        </div>

        {/* Subtle encouragement */}
        <div className="mt-8 text-center">
          <Heart className="w-4 h-4 text-rose-400 mx-auto mb-2" />
          <p className="text-xs text-gray-500">
            You deserve a fresh start
          </p>
        </div>
      </div>
    </div>
  );
};
