
import { useState } from 'react';
import { GraduationCap, Shield, Heart, Wallet, BookOpen, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onSetupComplete: () => void;
}

export const WelcomeScreen = ({ onSetupComplete }: WelcomeScreenProps) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [userName] = useState('Sarah');

  const handleVerifyClick = () => {
    console.log('Starting IOTA Identity verification...');
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-rose-400 mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent mb-4">
              Welcome to ScholarFlow, {userName}
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Your education-linked scholarship infrastructure awaits. Secure, transparent, purpose-bound.
            </p>
          </div>

          {/* Setup Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => handleSetupChoice('wallet')}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-200/50 hover:border-purple-400 hover:shadow-xl transition-all duration-200 text-left group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Set Up Student Wallet</h3>
              <p className="text-sm text-gray-600 mb-4">Initialize IOTA wallet for receiving CLT vouchers</p>
              <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                <span className="text-sm font-medium">Get started</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </button>

            <button
              onClick={() => handleSetupChoice('recovery')}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-rose-200/50 hover:border-rose-400 hover:shadow-xl transition-all duration-200 text-left group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-400 to-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Educational Vendors</h3>
              <p className="text-sm text-gray-600 mb-4">Bookstores, tuition centers, transport providers accepting CLTs</p>
              <div className="flex items-center text-rose-600 group-hover:text-rose-700">
                <span className="text-sm font-medium">Explore options</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </button>

            <button
              onClick={() => handleSetupChoice('safety')}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-200/50 hover:border-amber-400 hover:shadow-xl transition-all duration-200 text-left group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect with Scholarship Issuers</h3>
              <p className="text-sm text-gray-600 mb-4">Governments, DAOs, universities, CSR funds offering aid</p>
              <div className="flex items-center text-amber-600 group-hover:text-amber-700">
                <span className="text-sm font-medium">Setup protection</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 text-purple-500 mr-2" />
              IOTA Blockchain Security
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-600">Purpose-bound tokens (CLTs)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-600">IOTA Identity (DID)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-600">Tamper-proof audit trail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-rose-400 mb-6 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent mb-4">
            Welcome to ScholarFlow
          </h1>
          <p className="text-lg text-gray-600">
            Create your IOTA Identity to access decentralized education scholarships and purpose-bound vouchers.
          </p>
        </div>

        {/* Verification Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200/50 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-600 font-medium">Secure Identity Verification</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Scholar ID Verification
            </h2>
            <p className="text-gray-600 text-sm">
              Create your IOTA Identity (DID) for secure, privacy-preserving access to scholarships.
            </p>
          </div>

          <button
            onClick={handleVerifyClick}
            disabled={isVerifying}
            className="w-full bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 disabled:from-purple-400 disabled:to-rose-400 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isVerifying ? (
              <span className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Verifying securely...
              </span>
            ) : (
              'Create Scholar ID'
            )}
          </button>
        </div>

        {/* Security Features */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Why ScholarFlow is Different</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
              <div>
                <div className="font-medium text-gray-900 text-sm">Purpose-Bound Tokens</div>
                <div className="text-xs text-gray-600">CLTs ensure funds only go to verified education vendors</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
              <div>
                <div className="font-medium text-gray-900 text-sm">Decentralized Issuers</div>
                <div className="text-xs text-gray-600">Multiple scholarship providers can issue aid on one platform</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
              <div>
                <div className="font-medium text-gray-900 text-sm">Audit Transparency</div>
                <div className="text-xs text-gray-600">IOTA Notarization creates tamper-proof transaction logs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Encouragement */}
        <div className="mt-8 text-center">
          <Heart className="w-4 h-4 text-rose-400 mx-auto mb-2" />
          <p className="text-xs text-gray-500">
            Education is the foundation of opportunity
          </p>
        </div>
      </div>
    </div>
  );
};
