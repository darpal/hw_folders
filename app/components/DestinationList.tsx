import React from 'react';

// Define a type for the destination objects
interface Destination {
  name: string;
  imageUrl: string;
}

// Sample data for destinations
const destinations: Destination[] = [
  {
    name: 'New York',
    imageUrl: '/images/newyork.jpg',
  },
  {
    name: 'Paris',
    imageUrl: '/images/paris.jpg',
  },
  {
    name: 'London',
    imageUrl: '/images/london.jpg',
  },
];

// Define props type for DestinationCard
interface DestinationCardProps {
  name: string;
  imageUrl: string;
}

// DestinationCard component
const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  imageUrl,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="w-[240px] aspect-[4/3] overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-center">{name}</h3>
    </div>
  </div>
);

// DestinationList component
const DestinationList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-h-screen">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.name}
          name={destination.name}
          imageUrl={destination.imageUrl}
        />
      ))}
    </div>
  );
};

export default DestinationList;
