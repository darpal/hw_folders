'use client';
import React, { useState, useEffect } from 'react';
import { Button, IconButton } from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';
import { useDroppable } from '@dnd-kit/core';

type Item = {
  id: number;
  name: string;
};

const FolderList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>('');

  // Load items from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedItems = localStorage.getItem('folderListItems');
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('folderListItems', JSON.stringify(items));
    }
  }, [items]);

  const addItem = () => {
    if (name.trim() !== '') {
      setItems([...items, { id: items.length + 1, name }]);
      setName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const Folder = ({ item }: { item: Item }) => {
    const { isOver, setNodeRef } = useDroppable({
      id: `droppable-${item.id}`,
      data: {
        current: item
      }
    });

    const style = {
      color: isOver ? 'green' : undefined,
    };

    const deleteItem = (id: number) => {
      setItems(items.filter(item => item.id !== id));
    };

    return <div
      className="mb-4 p-4 border rounded-lg flex items-center space-x-4 bg-white"
      ref={setNodeRef} style={style}
    >
      <span className="font-semibold">{item.name}</span>
      <div className="flex-grow"></div>
      <IconButton onClick={() => deleteItem(item.id)} aria-label="Delete" className="ml-auto">
        <TrashIcon className="w-5 h-5" />
      </IconButton>
    </div>
  }


  return (
    <div className="p-4" >
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

      {items.map((item) => <Folder item={item} key={item.id} />)}

    </div>
  );
};



export default FolderList;
