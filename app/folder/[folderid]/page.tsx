import React from 'react';

interface Props {
  params: { folderid: number };
}

const FolderDetailpage = ({ params: { folderid } }: Props) => {
  return <div>FolderDetailpage of folderid={folderid}</div>;
};

export default FolderDetailpage;
