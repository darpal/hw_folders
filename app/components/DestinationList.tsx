import React from 'react';

const destinations = [
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

const DestinationCard = ({ name, imageUrl }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="w-[240px] aspect-[4/3] overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-center">{name}</h3>
    </div>
  </div>
);

const DestinationList = () => {
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
