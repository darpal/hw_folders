'use client';
import React, { useState } from 'react';
import { Button } from '@radix-ui/themes'; // Assuming Radix UI Button is used
import Image from 'next/image';

type Item = {
  id: number;
  name: string;
};

const FolderList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState('');
  //   const [imageUrls, setImageUrls] = useState<string[]>([]);

  const addItem = () => {
    if (name.trim() !== '') {
      setItems([...items, { id: items.length + 1, name }]);
      setName('');
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <Button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          ADD
        </Button>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="mb-4 p-4 border rounded-lg flex items-center space-x-4 bg-white"
        >
          <span className="font-semibold">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
