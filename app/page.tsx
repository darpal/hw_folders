'use client';
import Link from 'next/link';
import { Heading } from '@radix-ui/themes';
import { Flex, TextField } from '@radix-ui/themes';
import DestinationList from './components/DestinationList';
import FolderList from './components/FolderList';

export default function Home() {
  return (
    <main>
      <Flex className="flex flex-col items-center justify-center  bg-gray-100 space-y-4">
        <Heading size="6" weight="medium" className="text-center">
          Holiwise - Destinations
        </Heading>
        <Heading size="2" className="text-center">
          Organise your dream destinations in folders here
        </Heading>
      </Flex>

      {/* The two columns / start */}

      <Flex className="min-h-[440px] flex">
        {/* Left column */}
        <Flex className="flex-1 p-4 bg-gray-100 justify-normal">
          <Heading className="mb-8">Destinations</Heading>
          <DestinationList />
        </Flex>
        {/* Right column */}
        <Flex className="w-[300px] p-4 bg-gray-100">
          <Heading className="pb-4">Folders</Heading>
          <FolderList />
        </Flex>
      </Flex>
      {/* The two columns / end */}

      <Link href="/folder">[Go to folder]</Link>
    </main>
  );
}
