
import React from 'react';
import { MapPin } from 'lucide-react';
import Button from '@/components/Button.jsx';

const StoreLocationCard = ({ 
  storeName, 
  address, 
  hours, 
  showMapIcon = true 
}) => {
  return (
    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))]/30 rounded-xl p-4 md:p-6 hover-shadow-increase transition-all duration-300 w-full">
      <div className="flex items-start gap-3 mb-4">
        {showMapIcon && (
          <MapPin className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
        )}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--card-foreground))] mb-2 leading-snug">
            {storeName}
          </h3>
          <p className="text-[hsl(var(--card-foreground))] mb-3 leading-relaxed">
            {address}
          </p>
          <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            {hours}
          </p>
        </div>
      </div>
      
      <Button variant="primary" className="w-full touch-target">
        Visit store
      </Button>
    </div>
  );
};

export default StoreLocationCard;
