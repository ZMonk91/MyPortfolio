import React from 'react';
import {
  Box,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import Heading from './Heading';
import { PROJECT_LIST as projects } from './projectList';

const Projects = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.800', 'gray.50');

  return (
    <Box id="projects" bg={bg} color={color} py={16}>
      <Box maxW="xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading title={" My Projects"}/>
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
