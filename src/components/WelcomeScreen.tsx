import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, Store, BarChart3, Shield } from 'lucide-react';

interface WelcomeScreenProps {
  onSetupComplete: () => void;
}

export const WelcomeScreen = ({ onSetupComplete }: WelcomeScreenProps) => {
  const userTypes = [
    {
      id: 'issuer',
      title: 'Scholarship Issuer',
      description: 'Government, DAO, or CSR Organization',
      icon: Users,
      color: 'indigo'
    },
    {
      id: 'student', 
      title: 'Student',
      description: 'Receive and manage scholarship vouchers',
      icon: GraduationCap,
      color: 'violet'
    },
    {
      id: 'vendor',
      title: 'Vendor',
      description: 'Bookstore, Transport, Education Provider',
      icon: Store,
      color: 'emerald'
    },
    {
      id: 'audit',
      title: 'Public Audit',
      description: 'View transparent scholarship distribution',
      icon: BarChart3,
      color: 'slate'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="h-12 w-12 text-indigo-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              ScholarFlow
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Web3 Scholarship Distribution Platform on IOTA Blockchain
          </p>
          <p className="text-sm text-slate-500">
            Purpose-bound vouchers • Verified identities • Transparent audit trail
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userTypes.map((type) => (
            <Card key={type.id} className="relative overflow-hidden border-2 hover:border-indigo-200 transition-all duration-300 cursor-pointer group hover:shadow-lg">
              <CardHeader className="text-center">
                <div className={`mx-auto w-16 h-16 rounded-full bg-${type.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <type.icon className={`h-8 w-8 text-${type.color}-600`} />
                </div>
                <CardTitle className="text-lg">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm">
                  {type.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Access */}
        <div className="text-center space-y-4">
          <p className="text-sm text-slate-500">
            Demo Mode • Explore all features
          </p>
          <Button 
            onClick={onSetupComplete}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Enter Student Wallet
          </Button>
        </div>

        {/* IOTA Branding */}
        <div className="text-center">
          <p className="text-xs text-slate-400">
            Powered by IOTA • DID • CLT • Notarization
          </p>
        </div>
      </div>
    </div>
  );
};