import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box, ChakraProvider, useColorModeValue} from "@chakra-ui/react";
import theme from "./theme";

const Index = () => {
  const bg = useColorModeValue("brand.50", "brand.800");
  const color = useColorModeValue("brand.800", "brand.50");

  return (
    <ChakraProvider bg={useColorModeValue("gray.50", "gray.900")} minH="100vh" theme={theme}>
    <Box bg={bg} color={color} minH="100vh">
      <Navbar />
      <Hero/>
      <About />
      <Projects />
      <Contact />
      <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default Index;
