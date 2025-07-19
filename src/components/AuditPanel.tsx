import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Eye, 
  ExternalLink, 
  Shield,
  Users,
  GraduationCap,
  Store,
  TrendingUp
} from 'lucide-react';

interface AuditPanelProps {
  onNavigate: (screen: string) => void;
}

export const AuditPanel = ({ onNavigate }: AuditPanelProps) => {
  const stats = [
    {
      title: 'Total Vouchers Issued',
      value: '1,247',
      change: '+12%',
      icon: TrendingUp,
      color: 'indigo'
    },
    {
      title: 'Books Category',
      value: '$89,420',
      change: '+8%',
      icon: BarChart3,
      color: 'emerald'
    },
    {
      title: 'Transport Category', 
      value: '$34,680',
      change: '+15%',
      icon: BarChart3,
      color: 'blue'
    },
    {
      title: 'Tuition Category',
      value: '$156,780',
      change: '+5%',
      icon: BarChart3,
      color: 'violet'
    }
  ];

  const recentLogs = [
    {
      id: 'LOG001',
      action: 'Voucher Issued',
      issuer: 'Ministry of Education',
      amount: '$150',
      category: 'Books',
      hash: '0xa1b2c3d4e5f6...',
      timestamp: '2024-01-15 14:30:25'
    },
    {
      id: 'LOG002',
      action: 'Voucher Redeemed',
      vendor: 'University Bookstore',
      amount: '$45',
      category: 'Books',
      hash: '0xb2c3d4e5f6a1...',
      timestamp: '2024-01-15 13:15:10'
    },
    {
      id: 'LOG003',
      action: 'Voucher Issued',
      issuer: 'City Council',
      amount: '$100',
      category: 'Transport',
      hash: '0xc3d4e5f6a1b2...',
      timestamp: '2024-01-15 12:45:18'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Public Audit Panel</h1>
              <p className="text-slate-600">Transparent scholarship distribution tracking</p>
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
              onClick={() => onNavigate('vendor')}
              className="flex items-center space-x-2"
            >
              <Store className="h-4 w-4" />
              <span>Vendor</span>
            </Button>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                    <p className={`text-sm text-${stat.color}-600`}>{stat.change} vs last month</p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                    <stat.icon className={`h-5 w-5 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Usage by Category Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Usage by Category</CardTitle>
              <CardDescription>Scholarship funds distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                    <span>Books</span>
                  </div>
                  <span className="font-semibold">$89,420 (45%)</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-violet-500 rounded"></div>
                    <span>Tuition</span>
                  </div>
                  <span className="font-semibold">$156,780 (40%)</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-violet-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span>Transport</span>
                  </div>
                  <span className="font-semibold">$34,680 (15%)</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* IOTA Verification Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>IOTA Verification</span>
              </CardTitle>
              <CardDescription>Blockchain integrity status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                <div>
                  <p className="font-medium">All Transactions Verified</p>
                  <p className="text-sm text-slate-600">Latest block confirmed</p>
                </div>
                <Badge className="bg-emerald-600">Active</Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Transactions:</span>
                  <span className="font-medium">1,847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Verified on IOTA:</span>
                  <span className="font-medium">1,847 (100%)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Last Update:</span>
                  <span className="font-medium">2 minutes ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Log */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>IOTA Notarization Log</CardTitle>
            <CardDescription>
              Real-time blockchain transaction entries (no private data exposed)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLogs.map((log) => (
                <div key={log.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{log.id}</Badge>
                      <span className="font-medium">{log.action}</span>
                    </div>
                    <span className="text-sm text-slate-500">{log.timestamp}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-slate-600">
                        {log.action.includes('Issued') ? 'Issuer:' : 'Vendor:'}
                      </span>
                      <p className="font-medium">
                        {log.action.includes('Issued') ? log.issuer : log.vendor}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-600">Amount:</span>
                      <p className="font-medium">{log.amount}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Category:</span>
                      <p className="font-medium">{log.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-slate-600">IOTA Hash:</span>
                      <code className="text-xs bg-slate-100 px-2 py-1 rounded font-mono">
                        {log.hash}
                      </code>
                    </div>
                    <Button variant="link" size="sm">
                      View on Explorer
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};