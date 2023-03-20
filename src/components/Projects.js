import React from 'react';
import {
  Box,
  SimpleGrid,
  Center,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import Heading from './Heading';
import projects from './projectList';

function Projects() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.800', 'gray.50');
  const imgBg = useColorModeValue('black', 'grey');

  return (
    <Box id="projects" bg={bg} color={color} py={16}>
      <Box maxW="xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading title=" My Projects" />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <Center>
            <Image
              style={{ filter: `drop-shadow(1px 2px 3px ${imgBg})` }}
              name="Zachary Monk"
              src={require('../images/Pointing.png')}
              objectFit="cover"
              boxSize={{ base: '10rem', md: '17rem' }}
            />
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Projects;
