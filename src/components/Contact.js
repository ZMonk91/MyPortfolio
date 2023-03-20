import React from "react";
import {
  Box,
  Text,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import Heading from "./Heading";

const Contact = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "gray.50");

  return (
    <Box id="contact" bg={bg} color={color} py={16}>
      <Box maxW="xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading title="Contact Me"/>
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
