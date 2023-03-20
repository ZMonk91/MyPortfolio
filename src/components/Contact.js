import React from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Contact = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "gray.50");

  return (
    <Box id="contact" bg={bg} color={color} py={16}>
      <Box maxW="xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={10} textAlign="center">
          Contact Me
        </Heading>
        <Box as="form" mb={8}>
          <Input type="text" placeholder="Name" size="lg" mb={4} />
          <Input type="email" placeholder="Email" size="lg" mb={4} />
          <Textarea placeholder="Message" size="lg" mb={4} />
          <Button colorScheme="blue" size="lg" type="submit">
            Submit
          </Button>
        </Box>
        <Text fontSize="lg" textAlign="center">
          Have a question or want to work together? Feel free to reach out.
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
