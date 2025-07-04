
import { useState } from 'react';
import { Flower2, Shield, Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onSetupComplete: () => void;
}

export const WelcomeScreen = ({ onSetupComplete }: WelcomeScreenProps) => {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerifyClick = () => {
    console.log('Starting SafeID verification...');
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      onSetupComplete();
    }, 2000);
  };

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
