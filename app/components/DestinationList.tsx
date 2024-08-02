'use client';
import React from 'react';
import { Box, Flex } from '@radix-ui/themes';

// Define a type for the destination objects
interface Destination {
  id: number;
  name: string;
  imageUrl: string;
}

// Sample data for destinations
const destinations: Destination[] = [
  {
    id: 1,
    name: 'New York',
    imageUrl: '/images/newyork.jpg',
  },
  {
    id: 2,
    name: 'Paris',
    imageUrl: '/images/paris.jpg',
  },
  {
    id: 3,
    name: 'London',
    imageUrl: '/images/london.jpg',
  },
  {
    id: 4,
    name: 'Rome',
    imageUrl: '/images/rome.jpg',
  },
  {
    id: 5,
    name: 'Stockholm',
    imageUrl: '/images/stockholm.jpg',
  },
  {
    id: 6,
    name: 'Madrid',
    imageUrl: '/images/madrid.jpg',
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
  <Box className="bg-white h-[300px] shadow-md rounded-lg overflow-hidden">
    <Box className="w-[240px] overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full" />
    </Box>
    <Box className="p-4">
      <h3 className="text-xl font-semibold text-center">{name}</h3>
    </Box>
  </Box>
);

// DestinationList component
const DestinationList = () => {
  return (
    <Flex className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.name}
          name={destination.name}
          imageUrl={destination.imageUrl}
        />
      ))}
    </Flex>
  );
};

export default DestinationList;
