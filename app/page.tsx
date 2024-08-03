'use client';
import Link from 'next/link';
import { Flex, Box, Container, Heading, Text } from '@radix-ui/themes';
import DestinationList from './components/DestinationList';
import FolderList from './components/FolderList';

export default function Home() {
  return (
    <main>
      <Container size="4">
        {/* The two columns / start */}
        <Flex minHeight="440px" className="bg-slate-100 rounded-3xl p-4">
          {/* Left column */}
          <Box>
            <Heading size="5">Destinations</Heading>
            <DestinationList />
          </Box>
          {/* Right column */}
          <Box width="350px" className=" border-l-white border-l-2 pl-2">
            <Heading size="5">Folders</Heading>
            <FolderList />
          </Box>
        </Flex>
        {/* The two columns / end */}
        <Link href="/folder">[Go to folder]</Link>
      </Container>
    </main>
  );
}
