import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';

const Header = () => {
  return (
    <Flex direction="column" className="my-8">
      <Heading size="8" weight="medium" className="text-center">
        Holiwise - Destinations
      </Heading>
      <Text align="center" size="4">
        Organise your dream destinations in folders here
      </Text>
    </Flex>
  );
};

export default Header;
