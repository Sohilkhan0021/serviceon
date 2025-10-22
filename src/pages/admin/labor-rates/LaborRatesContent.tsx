import { Fragment, useState } from 'react';
import { DollarSign, Info, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LaborRatesContent = () => {
  const [formData, setFormData] = useState({
    defaultRate: '85.00',
    overtimeRate: '127.50',
    weekendRate: '95.00',
    holidayRate: '110.00',
    currency: 'USD',
    billingUnit: 'hour'
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Saving labor rates:', formData);
      // Implement save logic
    } catch (error) {
      console.error('Error saving labor rates:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const rateTypes = [
    {
      key: 'defaultRate',
      label: 'Standard Rate',
      description: 'Default hourly rate for regular work',
      icon: DollarSign
    },
    {
      key: 'overtimeRate',
      label: 'Overtime Rate',
      description: 'Rate for hours over 40 per week',
      icon: DollarSign
    },
    {
      key: 'weekendRate',
      label: 'Weekend Rate',
      description: 'Rate for weekend work',
      icon: DollarSign
    },
    {
      key: 'holidayRate',
      label: 'Holiday Rate',
      description: 'Rate for holiday work',
      icon: DollarSign
    }
  ];

  return (
    <Fragment>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Labor Rates</h1>
            <p className="text-gray-600 dark:text-gray-400">Configure default labor rates for your garage</p>
          </div>
          <Button onClick={handleSave} disabled={isSaving} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>

        {/* Main Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Rate Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Rate Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {rateTypes.map((rateType) => {
                  const Icon = rateType.icon;
                  return (
                    <div key={rateType.key} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-gray-500" />
                        <div className="flex-1">
                          <Label className="text-base font-medium">{rateType.label}</Label>
                          <p className="text-sm text-gray-500">{rateType.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">$</span>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            value={formData[rateType.key as keyof typeof formData]}
                            onChange={(e) => handleInputChange(rateType.key, e.target.value)}
                            className="w-32"
                            placeholder="0.00"
                          />
                        </div>
                        <span className="text-sm text-gray-500">per {formData.billingUnit}</span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Billing Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Billing Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Currency</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        value={formData.currency}
                        onChange={(e) => handleInputChange('currency', e.target.value)}
                        className="w-20"
                        placeholder="USD"
                      />
                      <span className="text-sm text-gray-500">ISO code</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Billing Unit</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        value={formData.billingUnit}
                        onChange={(e) => handleInputChange('billingUnit', e.target.value)}
                        className="w-20"
                        placeholder="hour"
                      />
                      <span className="text-sm text-gray-500">e.g., hour, day</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* How It Works */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Default Rates</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      These rates serve as defaults for new jobs and can be overridden per job.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Rate Application</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Rates are automatically applied based on work conditions (weekend, holiday, overtime).
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Job Override</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Individual jobs can have custom rates that override these defaults.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Settings Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Current Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Standard Rate</span>
                    <Badge variant="outline">${formData.defaultRate}/hour</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Overtime Rate</span>
                    <Badge variant="outline">${formData.overtimeRate}/hour</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Weekend Rate</span>
                    <Badge variant="outline">${formData.weekendRate}/hour</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Holiday Rate</span>
                    <Badge variant="outline">${formData.holidayRate}/hour</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help Text */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p>
                    <strong>Tip:</strong> Set competitive rates based on your local market and service quality.
                  </p>
                  <p>
                    <strong>Note:</strong> These rates can be adjusted per job if needed for special circumstances.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { LaborRatesContent };

