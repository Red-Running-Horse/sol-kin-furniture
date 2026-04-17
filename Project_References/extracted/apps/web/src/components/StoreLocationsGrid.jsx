
import React from 'react';
import StoreLocationCard from '@/components/StoreLocationCard.jsx';

const StoreLocationsGrid = ({ locations = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {locations.map((location, index) => (
        <StoreLocationCard
          key={index}
          storeName={location.storeName}
          address={location.address}
          hours={location.hours}
          showMapIcon={location.showMapIcon !== false}
        />
      ))}
    </div>
  );
};

export default StoreLocationsGrid;
