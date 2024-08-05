'use client';
import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import destinationsJSON from '@/data/destinations.json';
import { Folder, Destination } from '@/app/types';
import Image from 'next/image';

interface Props {
  params: { folderId: number };
}

const FolderDetailpage = ({ params: { folderId } }: Props) => {
  const [folderListItems, setFolderListItems] = useState<any[]>([]);
  const [folder, setFolder] = useState<Folder | undefined>(undefined);

  useEffect(() => {
    const storedFolders = localStorage.getItem('folderListItems');

    if (typeof window !== 'undefined') {
      if (storedFolders) {
        const folders: Folder[] = JSON.parse(storedFolders);
        console.log(folderId, folders);
        // Find the target folder
        const targetFolder = folders.find((f) => f.id === Number(folderId));
        console.log(targetFolder);
        setFolder(targetFolder);
      } else {
        localStorage.setItem(
          'folderListItems',
          JSON.stringify([{ id: 1, name: 'Favourite', destinations: [] }])
        );
      }
    }
  }, [folderId]);

  return (
    <Container size="4">
      <Flex direction="column" className="bg-slate-100 rounded-3xl p-4">
        <Flex>
          <Heading size="8">Folder: {folder?.name}</Heading>
        </Flex>

        <Grid gap="3" columns="3">
          {folder?.destinations?.map((id) => (
            <DestinationCard id={id} key={id} />
          ))}
        </Grid>
      </Flex>
      {/* <div>FolderDetailpage of folderid={folderId}</div> */}
    </Container>
  );
};

const destinations: Destination[] = destinationsJSON;
const DestinationCard = ({ id }: { id: number }) => {
  const destination = destinations.find((destination) => destination.id === id);

  return (
    <Box>
      {destination && (
        <Box>
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            width="200"
            height="200"
          />
          <Text size="2" weight="bold">
            {destination.name}
          </Text>
        </Box>
      )}
    </Box>
  );
};
export default FolderDetailpage;
