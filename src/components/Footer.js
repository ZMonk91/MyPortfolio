import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={6} textAlign="center">
      <Text color={"gray.500"} fontSize="md" mb={2}>
        © 2023 Zachary Monk
      </Text>
    </Box>
  );
};

export default Footer;
