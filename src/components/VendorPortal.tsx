import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Store, 
  Scan, 
  CheckCircle, 
  XCircle, 
  Clock,
  Users,
  GraduationCap,
  BarChart3
} from 'lucide-react';

interface VendorPortalProps {
  onNavigate: (screen: string) => void;
}

export const VendorPortal = ({ onNavigate }: VendorPortalProps) => {
  const [voucherId, setVoucherId] = useState('');
  const [redeemStatus, setRedeemStatus] = useState<'idle' | 'approved' | 'invalid' | 'expired'>('idle');

  const handleRedeem = () => {
    // Simulate validation
    if (voucherId === 'V001') {
      setRedeemStatus('approved');
    } else if (voucherId === 'V003') {
      setRedeemStatus('expired');
    } else {
      setRedeemStatus('invalid');
    }
  };

  const recentTransactions = [
    {
      id: 'T001',
      voucher: 'V001',
      amount: 45,
      category: 'Books',
      status: 'Completed',
      time: '10:30 AM'
    },
    {
      id: 'T002',
      voucher: 'V002', 
      amount: 25,
      category: 'Books',
      status: 'Completed',
      time: '9:15 AM'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
              <Store className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Vendor Portal</h1>
              <p className="text-slate-600">University Bookstore</p>
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
              onClick={() => onNavigate('student')}
              className="flex items-center space-x-2"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Student</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Voucher Redemption */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scan className="h-5 w-5" />
                  <span>Redeem Voucher</span>
                </CardTitle>
                <CardDescription>
                  Scan or enter voucher ID to process payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="voucher">Voucher ID</Label>
                  <Input 
                    id="voucher"
                    value={voucherId}
                    onChange={(e) => setVoucherId(e.target.value)}
                    placeholder="V001, V002, V003..."
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  onClick={handleRedeem}
                  className="w-full"
                  disabled={!voucherId}
                >
                  <Scan className="h-4 w-4 mr-2" />
                  Verify & Redeem
                </Button>
                
                {/* Status Display */}
                {redeemStatus !== 'idle' && (
                  <div className={`p-4 rounded-lg border-2 ${
                    redeemStatus === 'approved' 
                      ? 'bg-emerald-50 border-emerald-200' 
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-center space-x-2">
                      {redeemStatus === 'approved' ? (
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                      ) : redeemStatus === 'expired' ? (
                        <Clock className="h-5 w-5 text-red-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <span className={`font-medium ${
                        redeemStatus === 'approved' ? 'text-emerald-800' : 'text-red-800'
                      }`}>
                        {redeemStatus === 'approved' && 'Approved - Ready to Redeem'}
                        {redeemStatus === 'invalid' && 'Invalid Voucher'}
                        {redeemStatus === 'expired' && 'Expired Voucher'}
                      </span>
                    </div>
                    
                    {redeemStatus === 'approved' && (
                      <div className="mt-3 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Category:</span>
                          <span className="font-medium">Books Only</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Available:</span>
                          <span className="font-medium">$150.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Issuer:</span>
                          <span className="font-medium">Ministry of Education</span>
                        </div>
                        <Button className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700">
                          Process Payment
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Vendor Info */}
            <Card>
              <CardHeader>
                <CardTitle>Vendor Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Business Name:</span>
                  <span className="font-medium">University Bookstore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Vendor ID:</span>
                  <span className="font-mono text-sm">VND-001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Allowed Categories:</span>
                  <div className="flex space-x-1">
                    <Badge variant="secondary">Books</Badge>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Status:</span>
                  <Badge className="bg-emerald-600">Verified</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>
                  Today's voucher redemptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">
                            {transaction.id}
                          </span>
                          <p className="text-sm text-slate-600 mt-1">
                            Voucher: {transaction.voucher}
                          </p>
                        </div>
                        <span className="text-sm text-slate-500">{transaction.time}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">${transaction.amount}</p>
                          <p className="text-sm text-slate-600">{transaction.category}</p>
                        </div>
                        <Badge className="bg-emerald-600">{transaction.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Summary */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Today's Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-indigo-600">$70</p>
                    <p className="text-sm text-slate-600">Total Redeemed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-violet-600">2</p>
                    <p className="text-sm text-slate-600">Transactions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};