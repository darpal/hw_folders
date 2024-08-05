'use client'
import Link from 'next/link'
import { Flex, Box, Container, Heading, Text } from '@radix-ui/themes'
import DestinationList from './components/DestinationList'
import FolderList from './components/FolderList'
import { DndContext } from '@dnd-kit/core'
import destinationsJSON from '@/data/destinations.json'
import { useEffect, useState } from 'react'
import { Destination, Folder } from './types'
const destinations: Destination[] = destinationsJSON

export default function Home() {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const storedFolders = localStorage.getItem('folderListItems');

    if (typeof window !== 'undefined') {
      if (storedFolders) {
        console.log(storedFolders)
        setFolders(JSON.parse(storedFolders));
      } else {
        localStorage.setItem('folderListItems', JSON.stringify([{ id: 1, name: 'Favourite', destinations: [] }]))
      }
    }
  }, [])

  function handleDragEnd(event: any) {
    const { active, over } = event

    const selectedDestination = destinations.find(
      (destination) => destination.id === active.data.current.id
    )
    // Find the target folder
    const targetFolder = folders.find((folder) => folder.id === over.data.current.id)


    if (selectedDestination && targetFolder) {
      if (targetFolder.destinations === undefined) {
        targetFolder.destinations = []
      }
      targetFolder.destinations.push(selectedDestination.id)
      if (typeof window !== 'undefined') {
        if (folders.length > 0) {
          localStorage.setItem('folderListItems', JSON.stringify([targetFolder]))
        }
      }
    }

  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
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
              <FolderList folders={folders} />
            </Box>
          </Flex>
          {/* The two columns / end */}
        </Container>
      </main>
    </DndContext>
  )
}
