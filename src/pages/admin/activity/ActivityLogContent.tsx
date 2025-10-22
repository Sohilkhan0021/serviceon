import { Fragment, useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Calendar,
  User,
  Building2,
  Settings,
  CheckSquare,
  DollarSign,
  Trash2,
  Edit,
  Plus,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ActivityLogContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  // Mock data - replace with actual data
  const activities = [
    {
      id: 1,
      timestamp: '2024-01-20 14:30:15',
      user: 'John Smith',
      userEmail: 'john.smith@serviceon.com',
      action: 'Garage Updated',
      entity: 'Downtown Auto Service',
      entityType: 'garage',
      details: 'Updated garage information and branding settings',
      icon: Building2,
      color: 'text-blue-600'
    },
    {
      id: 2,
      timestamp: '2024-01-20 13:45:22',
      user: 'Sarah Johnson',
      userEmail: 'sarah.johnson@serviceon.com',
      action: 'User Created',
      entity: 'Mike Wilson',
      entityType: 'user',
      details: 'Created new technician account',
      icon: User,
      color: 'text-green-600'
    },
    {
      id: 3,
      timestamp: '2024-01-20 12:15:08',
      user: 'John Smith',
      userEmail: 'john.smith@serviceon.com',
      action: 'Checklist Updated',
      entity: 'Westside Garage',
      entityType: 'checklist',
      details: 'Modified intake checklist configuration',
      icon: CheckSquare,
      color: 'text-purple-600'
    },
    {
      id: 4,
      timestamp: '2024-01-20 11:30:45',
      user: 'John Smith',
      userEmail: 'john.smith@serviceon.com',
      action: 'Labor Rate Updated',
      entity: 'System',
      entityType: 'settings',
      details: 'Updated default labor rates',
      icon: DollarSign,
      color: 'text-orange-600'
    },
    {
      id: 5,
      timestamp: '2024-01-20 10:15:33',
      user: 'Sarah Johnson',
      userEmail: 'sarah.johnson@serviceon.com',
      action: 'User Disabled',
      entity: 'Lisa Brown',
      entityType: 'user',
      details: 'Disabled user account',
      icon: User,
      color: 'text-red-600'
    },
    {
      id: 6,
      timestamp: '2024-01-19 16:20:12',
      user: 'John Smith',
      userEmail: 'john.smith@serviceon.com',
      action: 'Branding Updated',
      entity: 'North Point Motors',
      entityType: 'branding',
      details: 'Updated garage logo and contact information',
      icon: Settings,
      color: 'text-indigo-600'
    }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || activity.entityType === typeFilter;
    return matchesSearch && matchesType;
  });

  const getActionBadge = (action: string) => {
    const actionColors: { [key: string]: string } = {
      'Garage Updated': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'User Created': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'User Disabled': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Checklist Updated': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Labor Rate Updated': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Branding Updated': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    };
    
    return (
      <Badge className={actionColors[action] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'}>
        {action}
      </Badge>
    );
  };

  const getEntityTypeIcon = (entityType: string) => {
    switch (entityType) {
      case 'garage':
        return <Building2 className="h-4 w-4 text-blue-600" />;
      case 'user':
        return <User className="h-4 w-4 text-green-600" />;
      case 'checklist':
        return <CheckSquare className="h-4 w-4 text-purple-600" />;
      case 'settings':
        return <Settings className="h-4 w-4 text-orange-600" />;
      case 'branding':
        return <Settings className="h-4 w-4 text-indigo-600" />;
      default:
        return <Eye className="h-4 w-4 text-gray-600" />;
    }
  };

  const handleExport = () => {
    console.log('Exporting activity log...');
    // Implement export logic
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    };
  };

  return (
    <Fragment>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Activity Log</h1>
            <p className="text-gray-600 dark:text-gray-400">System activity and audit trail</p>
          </div>
          <Button onClick={handleExport} variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Search & Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search activities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="garage">Garage</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="checklist">Checklist</SelectItem>
                    <SelectItem value="settings">Settings</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Garage Changes</p>
                  <p className="text-2xl font-bold">{activities.filter(a => a.entityType === 'garage').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">User Actions</p>
                  <p className="text-2xl font-bold">{activities.filter(a => a.entityType === 'user').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <CheckSquare className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Checklist Updates</p>
                  <p className="text-2xl font-bold">{activities.filter(a => a.entityType === 'checklist').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">System Changes</p>
                  <p className="text-2xl font-bold">{activities.filter(a => a.entityType === 'settings' || a.entityType === 'branding').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity ({filteredActivities.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Entity</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredActivities.map((activity) => {
                    const { date, time } = formatTimestamp(activity.timestamp);
                    const ActivityIcon = activity.icon;
                    
                    return (
                      <TableRow key={activity.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <div>
                              <div className="text-sm font-medium">{date}</div>
                              <div className="text-xs text-gray-500">{time}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/media/avatars/300-${(activity.id % 4) + 1}.png`} alt={activity.user} />
                              <AvatarFallback>
                                {activity.user.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{activity.user}</div>
                              <div className="text-xs text-gray-500">{activity.userEmail}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <ActivityIcon className={`h-4 w-4 ${activity.color}`} />
                            {getActionBadge(activity.action)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getEntityTypeIcon(activity.entityType)}
                            <span className="text-sm font-medium">{activity.entity}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-gray-600">{activity.details}</span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Info Panel */}
        <Card>
          <CardHeader>
            <CardTitle>About Activity Logging</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>
                <strong>What's logged:</strong> All administrative actions including garage updates, user management, 
                checklist changes, and system settings modifications.
              </p>
              <p>
                <strong>Retention:</strong> Activity logs are kept for 90 days. Older logs are automatically archived.
              </p>
              <p>
                <strong>Export:</strong> You can export activity data as CSV for external analysis or compliance reporting.
              </p>
              <p>
                <strong>Privacy:</strong> Sensitive data like passwords are never logged. Only action types and metadata are recorded.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Fragment>
  );
};

export { ActivityLogContent };


