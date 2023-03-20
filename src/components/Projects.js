import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

import { PROJECT_LIST as projects } from './projectList';

const Projects = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.800', 'gray.50');

  return (
    <Box id="projects" bg={bg} color={color} py={16}>
      <Box maxW="xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="bold"
          mb={10}
          textAlign="center"
        >
          My Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projects.map(project => (
            <ProjectCard project={project}/>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
