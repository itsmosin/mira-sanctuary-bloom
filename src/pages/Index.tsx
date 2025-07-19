
import React, { useState } from 'react';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { IssuerDashboard } from '@/components/IssuerDashboard';
import { StudentWallet } from '@/components/StudentWallet';
import { VendorPortal } from '@/components/VendorPortal';
import { AuditPanel } from '@/components/AuditPanel';

type Screen = 'welcome' | 'issuer' | 'student' | 'vendor' | 'audit';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  console.log('Current screen:', currentScreen);

  const handleSetupComplete = () => {
    setIsSetupComplete(true);
    setCurrentScreen('student');
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onSetupComplete={handleSetupComplete} />;
      case 'issuer':
        return <IssuerDashboard onNavigate={handleNavigate} />;
      case 'student':
        return <StudentWallet onNavigate={handleNavigate} />;
      case 'vendor':
        return <VendorPortal onNavigate={handleNavigate} />;
      case 'audit':
        return <AuditPanel onNavigate={handleNavigate} />;
      default:
        return <WelcomeScreen onSetupComplete={handleSetupComplete} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-slate-50 relative overflow-hidden">
      {/* IOTA-themed background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl animate-gentle-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-violet-200/30 rounded-full blur-xl animate-gentle-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-200/30 rounded-full blur-xl animate-gentle-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {renderScreen()}
      </div>
    </div>
  );
};

export default Index;
