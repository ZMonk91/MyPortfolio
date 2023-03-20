import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'WeatherCheck App',
    description:
      'A weather app built with React and the OpenWeatherMap API and Mapbox API.',
    repoLink: 'https://github.com/ZMonk91/WeatherCheck',
    liveLink: 'https://zmonk91.github.io/WeatherCheck/',
  },
  {
    id: 2,
    title: 'Vue Music Player',
    description: 'A music player built with Vue and the Spotify API.',
    repoLink: 'https://github.com/example/vue-music-player',
    liveLink: 'https://example.github.io/vue-music-player',
  },
  {
    id: 3,
    title: 'React Todo List',
    description: 'A todo list app built with React and localStorage.',
    repoLink: 'https://github.com/example/react-todo-list',
    liveLink: 'https://example.github.io/react-todo-list',
  },
];

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
            <Box
              key={project.id}
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
            >
              <Box p={6}>
                <Heading fontSize="2xl" fontWeight="bold" mb={4}>
                  {project.title}
                </Heading>
                <Text fontSize="lg" mb={4}>
                  {project.description}
                </Text>
                <Box d="flex" justifyContent="space-between">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size="24px" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    ml={4}
                  >
                    <FaExternalLinkAlt size="24px" />
                  </a>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
