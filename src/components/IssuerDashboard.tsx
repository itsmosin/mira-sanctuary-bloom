import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  Plus, 
  Book, 
  Bus, 
  School, 
  CheckCircle, 
  Eye,
  GraduationCap,
  Store,
  BarChart3
} from 'lucide-react';

interface IssuerDashboardProps {
  onNavigate: (screen: string) => void;
}

export const IssuerDashboard = ({ onNavigate }: IssuerDashboardProps) => {
  const [issuedVouchers] = useState([
    {
      id: 'V001',
      recipient: 'did:iota:student:0x1a2b3c...',
      category: 'Books',
      value: 150,
      status: 'Active',
      issued: '2024-01-15',
      expiry: '2024-02-15',
      used: 0
    },
    {
      id: 'V002', 
      recipient: 'did:iota:student:0x2b3c4d...',
      category: 'Transport',
      value: 100,
      status: 'Partially Used',
      issued: '2024-01-10',
      expiry: '2024-02-25',
      used: 25
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Issuer Dashboard</h1>
              <p className="text-slate-600">Ministry of Education Portal</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex space-x-2">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Issue New Voucher */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>Issue New Voucher</span>
                </CardTitle>
                <CardDescription>
                  Create purpose-bound scholarship tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="recipient">Student DID</Label>
                  <Input 
                    id="recipient" 
                    placeholder="did:iota:student:0x..." 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="books">Books Only</SelectItem>
                      <SelectItem value="transport">Public Transport</SelectItem>
                      <SelectItem value="tuition">Course Fees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="value">Value ($)</Label>
                  <Input 
                    id="value" 
                    type="number" 
                    placeholder="150" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="expiry">Expiry (Days)</Label>
                  <Input 
                    id="expiry" 
                    type="number" 
                    placeholder="30" 
                    className="mt-1"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700">
                  Issue Voucher
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Issued Vouchers List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Issued Vouchers</CardTitle>
                <CardDescription>
                  Track and monitor scholarship distribution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {issuedVouchers.map((voucher) => (
                    <div key={voucher.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-3">
                            <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">
                              {voucher.id}
                            </span>
                            <Badge 
                              variant={voucher.status === 'Active' ? 'default' : 'secondary'}
                            >
                              {voucher.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">
                            {voucher.recipient}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600">Category:</span>
                          <p className="font-medium">{voucher.category}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Value:</span>
                          <p className="font-medium">${voucher.value}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Used:</span>
                          <p className="font-medium">${voucher.used}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Expiry:</span>
                          <p className="font-medium">{voucher.expiry}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Usage Audit Trail */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  IOTA notarized transaction log
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="font-medium">Voucher V001 Issued</p>
                        <p className="text-sm text-slate-600">Books category • $150</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">2 hours ago</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Book className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Voucher V002 Used</p>
                        <p className="text-sm text-slate-600">University Bookstore • $25</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">5 hours ago</span>
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