/* eslint-disable global-require */
import React from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Center,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-scroll';

function Hero() {
  const bg = useColorModeValue('brand.50', 'brand.800');
  const color = useColorModeValue('brand.800', 'brand.50');
  const imgBg = useColorModeValue('black', 'grey');

  return (
    <Box bg={bg} color={color} py={40}>
      <Box maxW="xl" mx="auto" px={{ base: 4, md: 8 }} textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="bold"
          mb={6}
        >
          {"Hi, I'm "}
          <Text as="span" color="teal.500">
            Zachary Monk
          </Text>
        </Heading>
        <Center>
          <Image
            style={{ filter: `drop-shadow(0px 0px 5px ${imgBg})` }}
            name="Zachary Monk"
            src={require('../images/LaptopWave.png')}
            objectFit="cover"
            boxSize={{ base: '10rem', md: '17rem' }}
          />
        </Center>
        <Text fontSize={{ base: 'xl', md: '2xl' }} mb={10}>
          I'm a web developer with a passion for building beautiful, responsive
          websites and web applications.
        </Text>
        <Box display="flex" justifyContent="center" mb={10}>
          <Link to="projects" spy smooth duration={500} offset={-50}>
            <Button variant="outline" colorScheme="primary" mr={4}>
              My Work
            </Button>
          </Link>

          <Button
            as="a"
            href="https://github.com/zacharymonk"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaGithub />}
            variant="outline"
            colorScheme="primary"
            mr={4}
          >
            GitHub
          </Button>
          <Button
            as="a"
            href="https://www.linkedin.com/in/zacharymonk/"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaLinkedin />}
            variant="outline"
            colorScheme="primary"
          >
            LinkedIn
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
