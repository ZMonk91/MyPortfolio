import { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Link,Element,  animateScroll as scroll } from "react-scroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
    const scrollToTop = () => {
        scroll.scrollToTop({ smooth: "easeInOutQuad", duration: 500 })
      }
      
  const [headerHeight, setHeaderHeight] = useState(0);

  const { isOpen, onToggle } = useDisclosure();


  return (
    <ChakraProvider>
      <Box bg={useColorModeValue("gray.50", "gray.900")} minH="100vh">
        <Header
          onToggle={onToggle}
          isOpen={isOpen}
          scrollToTop = {scrollToTop}
        />
        <Box as="main" pt={[headerHeight, "60px"]}>
          <Stack spacing={8} mx="auto" maxW="800px" px={4}>
            <Hero scrollToTop={scrollToTop} />
            <Resume scrollToTop={scrollToTop} />
            <Portfolio scrollToTop={scrollToTop} />
            <Contact scrollToTop={scrollToTop} />
          </Stack>
        </Box>
        {/* <Footer /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
