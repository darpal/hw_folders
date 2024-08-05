'use client';
import React, { useState, useEffect } from 'react';
import { Container, Flex, Heading } from '@radix-ui/themes';
import destinationsJSON from '@/app/components/DestinationList';

interface Props {
  params: { folderid: number };
}

const destinations = [
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

const FolderDetailpage = ({ params: { folderid } }: Props) => {
  const [folderListItems, setFolderListItems] = useState<any[]>([]);

  useEffect(() => {
    const storedFolderListItems = localStorage.getItem('folderListItems');
    if (storedFolderListItems) {
      setFolderListItems(JSON.parse(storedFolderListItems));
    }
    console.log(storedFolderListItems);
  }, []);

  return (
    <Container size="4">
      <Flex direction="column" className="bg-slate-100 rounded-3xl p-4">
        <Flex>
          <Heading size="8">Folder: Yes yname of folder here</Heading>
        </Flex>
        <Flex></Flex>
      </Flex>
      <div>FolderDetailpage of folderid={folderid}</div>
    </Container>
  );
};

export default FolderDetailpage;
