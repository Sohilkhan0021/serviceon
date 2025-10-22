import { Fragment } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Users, 
  CheckSquare, 
  DollarSign, 
  TrendingUp,
  AlertCircle,
  Clock
} from 'lucide-react';

const AdminDashboardContent = () => {
  // Mock data - replace with actual data
  const stats = [
    {
      title: 'Total Garages',
      value: '12',
      change: '+2 this month',
      icon: Building2,
      color: 'text-blue-600'
    },
    {
      title: 'Active Users',
      value: '156',
      change: '+12 this week',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Completed Intakes',
      value: '1,234',
      change: '+45 this week',
      icon: CheckSquare,
      color: 'text-purple-600'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+8.2% this month',
      icon: DollarSign,
      color: 'text-orange-600'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'New garage added',
      details: 'Downtown Auto Service',
      time: '2 hours ago',
      type: 'success'
    },
    {
      id: 2,
      action: 'User disabled',
      details: 'john.doe@example.com',
      time: '4 hours ago',
      type: 'warning'
    },
    {
      id: 3,
      action: 'Checklist updated',
      details: 'Westside Garage',
      time: '6 hours ago',
      type: 'info'
    },
    {
      id: 4,
      action: 'Branding updated',
      details: 'North Point Motors',
      time: '1 day ago',
      type: 'info'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'info':
        return <Clock className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <Fragment>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome to ServiceOn Admin Panel</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-green-600 border-green-600">
              System Online
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="sand-hover-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color} sand-hover-icon`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 dark:text-green-400">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-3">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.details}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start sand-hover-button" variant="outline">
                  <Building2 className="h-4 w-4 mr-2" />
                  Add New Garage
                </Button>
                <Button className="w-full justify-start sand-hover-button" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Invite User
                </Button>
                <Button className="w-full justify-start sand-hover-button" variant="outline">
                  <CheckSquare className="h-4 w-4 mr-2" />
                  Configure Checklist
                </Button>
                <Button className="w-full justify-start sand-hover-button" variant="outline">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Set Labor Rates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export { AdminDashboardContent };
