import React from 'react';
import { Container } from '@radix-ui/themes';

interface Props {
  params: { folderid: number };
}

const FolderDetailpage = ({ params: { folderid } }: Props) => {
  return (
    <Container size="4">
      <div>FolderDetailpage of folderid={folderid}</div>
    </Container>
  );
};

export default FolderDetailpage;
