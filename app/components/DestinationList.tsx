'use client';
import React from 'react';
import { Box, Flex } from '@radix-ui/themes';
import destinationsJSON from '@/data/destinations.json';
import { useDraggable } from '@dnd-kit/core'
import { Destination } from '../types';

// Sample data for destinations
const destinations: Destination[] = destinationsJSON

// Define props type for DestinationCard
interface DestinationCardProps {
  destination: Destination;
}

// DestinationCard component
const DestinationCard: React.FC<DestinationCardProps> = ({
  destination
}: DestinationCardProps) => {

  const { id, name, imageUrl } = destination

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${id}`,
    data: destination
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return <Box className="bg-white h-[300px] shadow-md rounded-lg overflow-hidden"
    ref={setNodeRef} style={style} {...listeners} {...attributes}
  >
    <Box className="w-[240px] overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full" />
    </Box>
    <Box className="p-4">
      <h3 className="text-xl font-semibold text-center">{name}</h3>
    </Box>
  </Box>
}


// DestinationList component
const DestinationList = () => {
  return (
    <Flex className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </Flex>
  );
};

export default DestinationList;
