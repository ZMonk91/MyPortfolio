import {
  Box,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
  useColorModeValue,
  WrapItem,
} from '@chakra-ui/react';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  const bg = useColorModeValue('', '');

  return (
    <Box
      key={project.id}
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      backgroundImage={project.img}
      bgPos="center"
      bgRepeat="repeat-y"
      bgSize="contain"
    >
      <Box style={{ 'backdrop-filter': 'blur(3px)' }} p={6}>
        <Heading textAlign="center" fontSize="2xl" fontWeight="bold" mb={4}>
          {project.title}
        </Heading>
        <Text textAlign="center" fontSize="lg" mb={4}>
          {project.description}
        </Text>
        <SimpleGrid minChildWidth="64px" columns={2} justifyItems="center">
          <WrapItem
            as="a"
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              dropShadow="dark-lg"
              borderRadius="100%"
              as={FaGithub}
              size="md"
              bg={bg}
            />
          </WrapItem>

          <WrapItem
            as="a"
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            ml={4}
          >
            <IconButton
              as={FaExternalLinkAlt}
              size="md"
              borderRadius="sm"
              bg={bg}
            />
          </WrapItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default ProjectCard;
