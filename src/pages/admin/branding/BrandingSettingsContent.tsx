import { Fragment, useState } from 'react';
import { Upload, X, Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

const BrandingSettingsContent = () => {
  const [formData, setFormData] = useState({
    logo: null as File | null,
    companyName: 'ServiceOn',
    address: '123 Business St, City, State 12345',
    phone: '(555) 123-4567',
    email: 'info@serviceon.com',
    website: 'www.serviceon.com',
    footerText: 'Thank you for choosing our services',
    showLogo: true,
    showContact: true,
    showFooter: true
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        logo: file
      }));
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setFormData(prev => ({
      ...prev,
      logo: null
    }));
    setLogoPreview(null);
  };

  const handleSave = () => {
    console.log('Saving branding settings:', formData);
    // Implement save logic
  };

  const handlePreview = () => {
    console.log('Preview branding');
    // Implement preview logic
  };

  return (
    <Fragment>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Branding Settings</h1>
            <p className="text-gray-600 dark:text-gray-400">Configure your garage branding for intake forms and outputs</p>
          </div>
          <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handlePreview} className="flex items-center gap-2 sand-hover-button">
            <Eye className="h-4 w-4" />
            Preview
          </Button>
          <Button onClick={handleSave} className="sand-hover-button">
            Save Changes
          </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo Settings */}
            <Card className="sand-hover-card">
              <CardHeader>
                <CardTitle>Logo Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Logo on Outputs</Label>
                    <p className="text-sm text-gray-500">Display logo on intake forms and PDFs</p>
                  </div>
                  <Switch
                    checked={formData.showLogo}
                    onCheckedChange={(checked) => handleInputChange('showLogo', checked)}
                  />
                </div>

                <div className="space-y-4">
                  <Label>Upload Logo</Label>
                  {logoPreview ? (
                    <div className="relative">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="w-32 h-32 object-contain border rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={removeLogo}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Upload your garage logo</p>
                      <p className="text-xs text-gray-400">PNG, JPG up to 2MB</p>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="logo" className="cursor-pointer">
                      <div className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                        <Upload className="h-4 w-4 mr-2" />
                        Choose Logo File
                      </div>
                    </Label>
                    <Input
                      id="logo"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Recommended size: 200x200px or larger</p>
                    <p>• Supported formats: PNG, JPG, SVG</p>
                    <p>• Max file size: 2MB</p>
                    <p>• Logo will be automatically resized to fit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="123 Business St, City, State 12345"
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="info@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="www.company.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Footer Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Footer Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Contact Information</Label>
                    <p className="text-sm text-gray-500">Display contact info in footer</p>
                  </div>
                  <Switch
                    checked={formData.showContact}
                    onCheckedChange={(checked) => handleInputChange('showContact', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Custom Footer</Label>
                    <p className="text-sm text-gray-500">Display custom footer text</p>
                  </div>
                  <Switch
                    checked={formData.showFooter}
                    onCheckedChange={(checked) => handleInputChange('showFooter', checked)}
                  />
                </div>

                {formData.showFooter && (
                  <div className="space-y-2">
                    <Label htmlFor="footerText">Footer Text</Label>
                    <Textarea
                      id="footerText"
                      value={formData.footerText}
                      onChange={(e) => handleInputChange('footerText', e.target.value)}
                      placeholder="Thank you for choosing our services"
                      rows={2}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-900">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                    {formData.showLogo && logoPreview && (
                      <img
                        src={logoPreview}
                        alt="Logo"
                        className="h-8 w-8 object-contain"
                      />
                    )}
                    <div>
                      <div className="font-bold text-sm">{formData.companyName}</div>
                      <div className="text-xs text-gray-500">Service Intake Form</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 text-xs">
                    <div className="font-medium">Customer Information</div>
                    <div className="text-gray-500">Name: _________________</div>
                    <div className="text-gray-500">Phone: _________________</div>
                    <div className="text-gray-500">Email: _________________</div>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t text-xs text-gray-500">
                    {formData.showContact && (
                      <div className="space-y-1">
                        <div>{formData.address}</div>
                        <div>{formData.phone} • {formData.email}</div>
                        {formData.website && <div>{formData.website}</div>}
                      </div>
                    )}
                    {formData.showFooter && (
                      <div className="mt-2 text-center">
                        {formData.footerText}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Applied To Outputs */}
            <Card>
              <CardHeader>
                <CardTitle>Applied To Outputs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Intake Forms</Badge>
                    <span className="text-sm text-gray-500">Customer intake checklists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Service Reports</Badge>
                    <span className="text-sm text-gray-500">Completed service documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Invoices</Badge>
                    <span className="text-sm text-gray-500">Customer billing documents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Labels</Badge>
                    <span className="text-sm text-gray-500">Part and service labels</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <strong>Note:</strong> These branding settings will be applied to all PDF outputs and printed materials generated by the system.
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

export { BrandingSettingsContent };
