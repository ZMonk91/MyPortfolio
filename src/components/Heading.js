import { Heading as ChakraHeading } from '@chakra-ui/react';

const Heading = ({ title }) => {
  return (
    <ChakraHeading
      as="h2"
      fontSize={{ base: '3xl', md: '4xl' }}
      fontWeight="bold"
      mb={10}
      textAlign="center"
    >{title}</ChakraHeading>
  );
};

export default Heading