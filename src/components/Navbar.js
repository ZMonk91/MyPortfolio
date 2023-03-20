import { Box, Flex, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
    const isDarkMode = colorMode === 'light' 
  return (
    <Box
      bg={isDarkMode ? 'white' : 'gray.900'}
      px={4}
      py={4}
      boxShadow="md"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box fontSize="lg" fontWeight="bold" color="teal.500">
          Zachary Monk
        </Box>
        <HStack spacing={8} alignItems="center">
          <NavbarLink  linkTo={'home'}/>
          <NavbarLink  linkTo={'about'}/>
          <NavbarLink  linkTo={'projects'}/>
          <NavbarLink  linkTo={'contact'}/>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            variant="ghost"
            color="Highlight"
            ml={{ base: '0', md: '3' }}
            onClick={toggleColorMode}
            icon={isDarkMode ? <FaSun /> : <FaMoon />}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
