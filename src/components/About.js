import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Heading from "./Heading";

const About = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "gray.50");

  return (
    <Box id="about" bg={bg} color={color} py={16}>
      <Box maxW="xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading title="About Me" />
         <Text fontSize={{ base: "xl", md: "2xl" }} mb={10}>
          My name is Zachary Monk and I'm a web developer with a focus on front-end development. I love building beautiful, responsive websites and web applications that are user-friendly and accessible to everyone.
        </Text>
        <Text fontSize={{ base: "xl", md: "2xl" }} mb={10}>
          I have experience with a variety of front-end technologies, including HTML, CSS, JavaScript, React, and more. I'm also proficient in Git and have experience working with APIs and integrating third-party libraries and services.
        </Text>
        <Text fontSize={{ base: "xl", md: "2xl" }} mb={10}>
          When I'm not coding, you can usually find me taking my kids on adventures. I'm also a big fan of music and stand up comedy, and I enjoy trying out new foods to eat all the time.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
