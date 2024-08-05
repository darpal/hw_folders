'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Grid, IconButton } from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';
import { useDroppable } from '@dnd-kit/core';
import { Destination, Folder } from '../types';
import destinations from '@/data/destinations.json';
import Image from 'next/image';

const FolderList = ({ folders: newFolders }: { folders: Folder[] }) => {
  const [folders, setFolders] = useState<Folder[]>(newFolders);
  const [name, setName] = useState<string>('');

  console.log('inner folders', newFolders);

  // Load items from localStorage on component mount
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const storedItems = localStorage.getItem('folderListItems');
  //     if (storedItems) {
  //       setItems(JSON.parse(storedItems));
  //     }
  //   }
  // }, []);

  // Save items to localStorage whenever they change
  // This is overridding our initial state. Refactor later
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     if (folders.length > 0) {
  //       localStorage.setItem('folderListItems', JSON.stringify(folders))
  //     }
  //   }
  // }, [folders])

  const addItem = () => {
    if (name.trim() !== '') {
      setFolders([
        ...folders,
        { id: folders.length + 1, name, destinations: [] },
      ]);
      setName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const Folder = ({ item }: { item: Folder }) => {
    const { isOver, setNodeRef } = useDroppable({
      id: `droppable-${item.id}`,
      data: item,
    });

    const style = {
      color: isOver ? 'green' : undefined,
      border: isOver ? '2px solid green' : undefined,
    };

    const deleteFolder = (id: number) => {
      setFolders(folders.filter((folder) => folder.id !== id));
    };

    return (
      <Box
        className="mb-4 p-4 border rounded-lg items-start space-x-4 bg-white h-80"
        ref={setNodeRef}
        style={style}
      >
        <span className="font-semibold">{item.name}</span>
        {/* <IconButton
          onClick={() => deleteFolder(item.id)}
          aria-label="Delete"
          className="ml-auto"
        >
          <TrashIcon className="w-5 h-5" />
        </IconButton> */}

        <Box mt="5">
          <Grid gap="3" columns="3">
            {item.destinations?.map((id) => (
              <Destination id={id} key={id} />
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  const Destination = ({ id }: { id: number }) => {
    const destination = destinations.find(
      (destination) => destination.id === id
    );

    return (
      <Box>
        {destination && (
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            width="48"
            height="48"
          />
        )}
      </Box>
    );
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyPress}
          className="border p-2 rounded mr-2"
        />
        <Button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          ADD
        </Button>
      </div>

      {newFolders.map((folder) => (
        <Folder item={folder} key={folder.id} />
      ))}
    </div>
  );
};

export default FolderList;
