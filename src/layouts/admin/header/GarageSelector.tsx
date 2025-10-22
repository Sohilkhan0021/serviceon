import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useAdminLayout } from '../';

// Mock data - replace with actual garage data
const mockGarages = [
  { id: 1, name: 'Downtown Auto Service', address: '123 Main St, City' },
  { id: 2, name: 'Westside Garage', address: '456 Oak Ave, City' },
  { id: 3, name: 'North Point Motors', address: '789 Pine Rd, City' },
];

const GarageSelector = () => {
  const { currentGarage, setCurrentGarage } = useAdminLayout();
  const [isOpen, setIsOpen] = useState(false);

  const handleGarageSelect = (garage: any) => {
    setCurrentGarage(garage);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {currentGarage ? currentGarage.name : 'Select Garage'}
          </span>
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64">
        {mockGarages.map((garage) => (
          <DropdownMenuItem
            key={garage.id}
            onClick={() => handleGarageSelect(garage)}
            className="flex flex-col items-start p-3"
          >
            <div className="font-medium">{garage.name}</div>
            <div className="text-xs text-gray-500">{garage.address}</div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { GarageSelector };


