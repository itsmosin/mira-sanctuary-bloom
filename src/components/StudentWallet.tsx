import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Book, 
  Bus, 
  School, 
  Shield, 
  Calendar, 
  ExternalLink,
  Users,
  Store,
  BarChart3
} from 'lucide-react';

interface StudentWalletProps {
  onNavigate: (screen: string) => void;
}

export const StudentWallet = ({ onNavigate }: StudentWalletProps) => {
  const [vouchers] = useState([
    {
      id: 1,
      category: 'Books',
      value: 150,
      remaining: 150,
      expiry: '30 days',
      issuer: 'Ministry of Education',
      purpose: 'Books Only',
      icon: Book,
      color: 'emerald'
    },
    {
      id: 2,
      category: 'Transport',
      value: 100,
      remaining: 75,
      expiry: '45 days',
      issuer: 'City Council',
      purpose: 'Public Transport',
      icon: Bus,
      color: 'blue'
    },
    {
      id: 3,
      category: 'Tuition',
      value: 500,
      remaining: 500,
      expiry: '90 days',
      issuer: 'Education Foundation',
      purpose: 'Course Fees',
      icon: School,
      color: 'violet'
    }
  ]);

  const totalBalance = vouchers.reduce((sum, voucher) => sum + voucher.remaining, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-slate-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Student Wallet</h1>
              <p className="text-slate-600">Manage your scholarship vouchers</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => onNavigate('issuer')}
              className="flex items-center space-x-2"
            >
              <Users className="h-4 w-4" />
              <span>Issuer</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => onNavigate('vendor')}
              className="flex items-center space-x-2"
            >
              <Store className="h-4 w-4" />
              <span>Vendor</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => onNavigate('audit')}
              className="flex items-center space-x-2"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Audit</span>
            </Button>
          </div>
        </div>

        {/* Identity Verification */}
        <Card className="mb-8 border-2 border-emerald-200 bg-emerald-50">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-emerald-600" />
              <div>
                <h3 className="font-semibold text-emerald-800">Scholar ID Verified</h3>
                <p className="text-sm text-emerald-600">DID: did:iota:scholar:0x1a2b3c...</p>
              </div>
            </div>
            <Badge className="bg-emerald-600 text-white">Verified</Badge>
          </CardContent>
        </Card>

        {/* Balance Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
            <CardDescription>Available scholarship funds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              ${totalBalance.toLocaleString()}
            </div>
            <p className="text-sm text-slate-600">
              Across {vouchers.length} active vouchers
            </p>
          </CardContent>
        </Card>

        {/* Vouchers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {vouchers.map((voucher) => (
            <Card key={voucher.id} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className={`absolute top-0 left-0 w-full h-1 bg-${voucher.color}-500`}></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-lg bg-${voucher.color}-100 flex items-center justify-center`}>
                    <voucher.icon className={`h-5 w-5 text-${voucher.color}-600`} />
                  </div>
                  <Badge variant="outline">{voucher.category}</Badge>
                </div>
                <CardTitle className="text-xl">${voucher.remaining}</CardTitle>
                <CardDescription>of ${voucher.value} remaining</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Issued by:</span>
                    <span className="font-medium">{voucher.issuer}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Purpose:</span>
                    <span className="font-medium">{voucher.purpose}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Expires in:</span>
                    <span className="font-medium flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {voucher.expiry}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Find Vendors
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* IOTA Verification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>IOTA Verified Log</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Latest Transaction</p>
                  <p className="text-sm text-slate-600">Voucher received from Ministry of Education</p>
                </div>
                <Button variant="link" size="sm">
                  View Hash
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};